import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Warehouse = {
  warehouse_id: string;
  warehouse_location: string;
  warehouse_volume: number;
  max_volume: number;
};

type State = {
  list: Warehouse[];
};

const initialState: State = {
  list: [],
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    setWarehouses(state, action: PayloadAction<Warehouse[]>) {
      state.list = action.payload;
    },

    updateWarehouseVolume(
      state,
      action: PayloadAction<{ id: string; volume: number }>
    ) {
      const w = state.list.find(x => x.warehouse_id === action.payload.id);
      if (w) w.warehouse_volume = action.payload.volume;
    },
  },
});

export const { setWarehouses, updateWarehouseVolume } = warehouseSlice.actions;
export default warehouseSlice.reducer;