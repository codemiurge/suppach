import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "@entities/batch/models/batchSlice"
import warehouseReducer from "@entities/warehouse/models/warehouseSlice";
import ingredientReducer from "@entities/ingredient/models/ingredientSlice";

export const store = configureStore({
    reducer:{
        batch: batchReducer,
        warehouse: warehouseReducer,
        ingredient: ingredientReducer
        
    }
})

export type RootState = ReturnType<
    typeof store.getState
>;

export type AppDispatch =
    typeof store.dispatch;