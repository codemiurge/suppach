import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Ingredient = {
  id: string;
  name: string;
  unit: string;
  stock: number;
  warehouse_id: string;
};

type State = {
  list: Ingredient[];
};

const initialState: State = {
  list: [],
};

const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setIngredients(state, action: PayloadAction<Ingredient[]>) {
      state.list = action.payload;
    },

    updateStock(
      state,
      action: PayloadAction<{ id: string; stock: number }>
    ) {
      const i = state.list.find(x => x.id === action.payload.id);
      if (i) i.stock = action.payload.stock;
    },
  },
});

export const { setIngredients, updateStock } = ingredientSlice.actions;
export default ingredientSlice.reducer;