import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@app/store";

import {
    deleteRecipe,
    type Recipe
} from "@entities/recipe/models/recipeSlice";

import {
    deleteRecipeIngredient
} from "@entities/recipe/models/recipeIngredientSlice";

import {
    FontAwesomeIcon,
    faPencil,
    faTrash,
    faChevronDown,
    faChevronRight
} from "@shared/icons";

import "./RecipeTable.scss";


interface Props {
    onEdit: (recipe: Recipe) => void;
}


export function RecipeTable({
    onEdit
}: Props) {
    const dispatch = useDispatch();

    const [opened, setOpened] = useState<string[]>([]);

    const recipes = useSelector(
        (state: RootState) =>
            state.recipe.list
    );

    const recipeIngredients = useSelector(
        (state: RootState) =>
            state.recipeIngredient.list
    );

    const ingredients = useSelector(
        (state: RootState) =>
            state.ingredient.list
    );


    function toggle(id: string) {
        setOpened(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    }


    function getComposition(id: string) {
        return recipeIngredients.filter(
            item =>
                item.recipe_id === id
        );
    }


    function remove(recipe: Recipe) {
        dispatch(
            deleteRecipe(
                recipe.recipe_id
            )
        );

        getComposition(recipe.recipe_id)
            .forEach(item => {
                dispatch(
                    deleteRecipeIngredient({
                        recipe_id: item.recipe_id,
                        ingredient_id: item.ingredient_id
                    })
                );
            });
    }


    return (
        <div className="recipeTableWrapper">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Название рецепта</th>
                        <th>Ингредиентов</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        recipes.map(recipe => {
                            const composition = getComposition(
                                recipe.recipe_id
                            );

                            const isOpen = opened.includes(
                                recipe.recipe_id
                            );

                            return (
                                <>
                                    <tr key={recipe.recipe_id}>
                                        <td>
                                            <button
                                                className="expandButton"
                                                onClick={() =>
                                                    toggle(
                                                        recipe.recipe_id
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={
                                                        isOpen
                                                            ? faChevronDown
                                                            : faChevronRight
                                                    }
                                                />
                                            </button>
                                        </td>

                                        <td className="recipeName">
                                            {recipe.name}
                                        </td>

                                        <td>
                                            {composition.length} шт.
                                        </td>

                                        <td>
                                            <button
                                                className="edit"
                                                onClick={() =>
                                                    onEdit(recipe)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPencil}
                                                />
                                            </button>

                                            <button
                                                className="delete"
                                                onClick={() =>
                                                    remove(recipe)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </td>
                                    </tr>

                                    {
                                        isOpen &&
                                        <tr className="compositionRow">
                                            <td colSpan={4}>
                                                <div className="composition">
                                                    {
                                                        composition.length === 0
                                                            ?
                                                            <span>
                                                                Ингредиенты отсутствуют
                                                            </span>
                                                            :
                                                            composition.map(item => {
                                                                const ingredient =
                                                                    ingredients.find(
                                                                        i =>
                                                                            i.id === item.ingredient_id
                                                                    );

                                                                return (
                                                                    <div
                                                                        className="compositionItem"
                                                                        key={item.ingredient_id}
                                                                    >
                                                                        <span>
                                                                            {
                                                                                ingredient?.name ??
                                                                                "Неизвестный ингредиент"
                                                                            }
                                                                        </span>

                                                                        <b>
                                                                            {item.amount_mg} мг
                                                                        </b>
                                                                    </div>
                                                                );
                                                            })
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}