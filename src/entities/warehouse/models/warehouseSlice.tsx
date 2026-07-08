import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type Warehouse = {
    warehouse_id: string;
    warehouse_location: string;
    warehouse_volume: number;
    max_volume: number;
};


type WarehouseState = {
    list: Warehouse[];
};


const initialState: WarehouseState = {
    list: [],
};


const warehouseSlice = createSlice({

    name: "warehouse",

    initialState,

    reducers: {


        setWarehouses(
            state,
            action: PayloadAction<Warehouse[]>
        ){
            state.list = action.payload;
        },


        addWarehouse(
            state,
            action: PayloadAction<Warehouse>
        ){
            state.list.push(action.payload);
        },


        updateWarehouse(
            state,
            action: PayloadAction<Warehouse>
        ){

            const index = state.list.findIndex(
                warehouse =>
                    warehouse.warehouse_id ===
                    action.payload.warehouse_id
            );


            if(index !== -1){
                state.list[index] = action.payload;
            }

        },


        deleteWarehouse(
            state,
            action: PayloadAction<string>
        ){

            state.list =
                state.list.filter(
                    warehouse =>
                        warehouse.warehouse_id !== action.payload
                );

        }

    }

});


export const {
    setWarehouses,
    addWarehouse,
    updateWarehouse,
    deleteWarehouse

} = warehouseSlice.actions;


export default warehouseSlice.reducer;