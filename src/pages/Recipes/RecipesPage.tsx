import {useState} from "react";
import type {Recipe} from "@entities/recipe/models/recipeSlice";
import CreateRecipeForm from "@features/recipe/createRecipe/CreateRecipeForm";
import EditRecipeForm from "@features/recipe/editRecipe/EditRecipeForm";
import {RecipeTable} from "@widgets/RecipeTable/RecipeTable";
import {FontAwesomeIcon,faPlus} from "@shared/icons";
import "./RecipesPage.scss";

export default function RecipesPage(){

    const [createOpen,setCreateOpen]=useState(false);
    const [editing,setEditing]=useState<Recipe|null>(null);

    return(
        <div className="recipesPage">

            <div className="pageHeader">
                <div>
                    <h1>Рецепты</h1>
                    <p>Управление составами БАД</p>
                </div>

                <button
                    className="createButton"
                    onClick={()=>setCreateOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                    Создать рецепт
                </button>
            </div>

            <RecipeTable onEdit={setEditing}/>

            {
                createOpen &&
                <div className="modalOverlay">
                    <div className="modal">

                        <button
                            className="closeButton"
                            onClick={()=>setCreateOpen(false)}
                        >
                            ×
                        </button>

                        <CreateRecipeForm
                            onClose={()=>setCreateOpen(false)}
                        />

                    </div>
                </div>
            }

            {
                editing &&
                <div className="modalOverlay">
                    <div className="modal">

                        <button
                            className="closeButton"
                            onClick={()=>setEditing(null)}
                        >
                            ×
                        </button>

                        <EditRecipeForm
                            recipe={editing}
                            onClose={()=>setEditing(null)}
                        />

                    </div>
                </div>
            }

        </div>
    );
}