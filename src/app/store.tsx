import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "@entities/batch/models/batchSlice"
import warehouseReducer from "@entities/warehouse/models/warehouseSlice";

export const store = configureStore({
    reducer:{
        batch: batchReducer,
        warehouse: warehouseReducer,
        
    }
})

export type RootState = ReturnType<
    typeof store.getState
>;

export type AppDispatch =
    typeof store.dispatch;