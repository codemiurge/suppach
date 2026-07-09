import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { setWarehouses } from "@entities/warehouse/models/warehouseSlice";
import { setIngredients } from "@entities/ingredient/models/ingredientSlice";
import { setRecipes } from "@entities/recipe/models/recipeSlice";
import { setRecipeIngredients } from "@entities/recipe/models/recipeIngredientSlice";
import { setBatches } from "@entities/batch/models/batchSlice";

export default function AppInitializer(){
    const dispatch=useDispatch();
    useEffect(()=>{

        fetch("/db.json")
            .then(r=>r.json())
            .then(data=>{


                const warehouses=data.find(
                    (t:any)=>t.name==="warehouse"
                )?.data ?? [];

                dispatch(
                    setWarehouses(
                        warehouses.map((w:any)=>({
                            ...w,
                            warehouse_volume:Number(w.warehouse_volume),
                            max_volume:Number(w.max_volume)
                        }))
                    )
                );

                const ingredients=data.find(
                    (t:any)=>t.name==="ingredient"
                )?.data ?? [];

                dispatch(
                    setIngredients(
                        ingredients.map((i:any)=>({
                            ...i,
                            ingredient_stock_qty:Number(
                                i.ingredient_stock_qty
                            )
                        }))
                    )
                );

                const recipes=data.find(
                    (t:any)=>t.name ==="recipe"
                )?.data ?? [];


                dispatch(
                    setRecipes(
                        recipes
                    )
                );

                const recipeIngredients=data.find(
                    (t:any)=>t.name==="recipe_ingredient"
                )?.data ?? [];


                dispatch(
                    setRecipeIngredients(
                        recipeIngredients.map((r:any)=>({
                            ...r,
                            amount_mg:Number(r.amount_mg)
                        }))
                    )
                );


                const batches = data.find(
                    (table: any) => table.name === "batch"
                ).data;

                dispatch(
                    setBatches(
                        batches.map((batch: any) => ({
                            ...batch,
                            quantity_units: Number(batch.quantity_units),
                            capsules_per_unit: Number(batch.capsules_per_unit),
                            total_capsules: Number(batch.total_capsules),
                        }))
                    )
                );

            });


    },[dispatch]);


    return null;
}