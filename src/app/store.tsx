import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "@entities/batch/models/batchSlice"
import warehouseReducer from "@entities/warehouse/models/warehouseSlice";
import ingredientReducer from "@entities/ingredient/models/ingredientSlice";
import recipeReducer from "@entities/recipe/models/recipeSlice";
import recipeIngredientReducer from "@entities/recipe/models/recipeIngredientSlice";

export const store = configureStore({
    reducer:{
        batch: batchReducer,
        warehouse: warehouseReducer,
        ingredient: ingredientReducer,
        recipe: recipeReducer,
        recipeIngredient: recipeIngredientReducer,
    }
})

export type RootState = ReturnType<
    typeof store.getState
>;

export type AppDispatch =
    typeof store.dispatch;