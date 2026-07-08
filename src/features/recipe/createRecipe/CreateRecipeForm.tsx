import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import type {RootState} from "@app/store";

import {addRecipe} from "@entities/recipe/models/recipeSlice";
import {addRecipeIngredient} from "@entities/recipe/models/recipeIngredientSlice";

import "./CreateRecipeForm.scss";


interface Props{
    onClose:()=>void;
}

type Row={
    ingredient_id:string;
    amount_mg:number;
};


export default function CreateRecipeForm({onClose}:Props){

    const dispatch=useDispatch();

    const ingredients=useSelector(
        (state:RootState)=>state.ingredient.list
    );


    const [name,setName]=useState("");

    const [rows,setRows]=useState<Row[]>([
        {
            ingredient_id:"",
            amount_mg:0
        }
    ]);


    function addRow(){

        setRows([
            ...rows,
            {
                ingredient_id:"",
                amount_mg:0
            }
        ]);

    }


    function removeRow(index:number){

        if(rows.length===1){

            setRows([
                {
                    ingredient_id:"",
                    amount_mg:0
                }
            ]);

            return;
        }


        setRows(
            rows.filter((_,i)=>i!==index)
        );

    }


    function updateRow(
        index:number,
        field:keyof Row,
        value:string|number
    ){

        const copy=[...rows];

        copy[index]={
            ...copy[index],
            [field]:value
        };

        setRows(copy);

    }


    function submit(e:React.FormEvent){

        e.preventDefault();


        const recipeId=crypto.randomUUID();


        dispatch(
            addRecipe({
                recipe_id:recipeId,
                name
            })
        );


        rows
        .filter(
            row=>
                row.ingredient_id &&
                row.amount_mg>0
        )
        .forEach(row=>{

            dispatch(
                addRecipeIngredient({
                    recipe_id:recipeId,
                    ingredient_id:row.ingredient_id,
                    amount_mg:row.amount_mg
                })
            );

        });


        onClose();

    }



    return(
        <form
            className="recipeForm"
            onSubmit={submit}
        >

            <h2>
                Создание рецепта
            </h2>


            <label>
                Название рецепта
            </label>

            <input
                value={name}
                placeholder="Например: Магний 100 мг"
                required
                onChange={
                    e=>setName(e.target.value)
                }
            />


            <div className="ingredientsHeader">
                <h3>
                    Ингредиенты
                </h3>

                <button
                    type="button"
                    className="addRow"
                    onClick={addRow}
                >
                    +
                </button>
            </div>


            <div className="rows">

            {
                rows.map((row,index)=>(

                    <div
                        className="ingredientRow"
                        key={index}
                    >

                        <select
                            value={row.ingredient_id}
                            onChange={
                                e=>
                                updateRow(
                                    index,
                                    "ingredient_id",
                                    e.target.value
                                )
                            }
                        >

                            <option value="">
                                Выберите ингредиент
                            </option>

                            {
                                ingredients.map(i=>(

                                    <option
                                        key={i.id}
                                        value={i.id}
                                    >
                                        {i.name}
                                    </option>

                                ))
                            }

                        </select>


                        <input
                            type="number"
                            min={0}
                            placeholder="мг"
                            value={row.amount_mg}
                            required
                            onChange={
                                e=>
                                updateRow(
                                    index,
                                    "amount_mg",
                                    Number(e.target.value)
                                )
                            }
                        />


                        <button
                            type="button"
                            className="removeRow"
                            onClick={
                                ()=>removeRow(index)
                            }
                        >
                            −
                        </button>

                    </div>

                ))
            }

            </div>


            <button className="submitButton">
                Создать рецепт
            </button>

        </form>
    );

}