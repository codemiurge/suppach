import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Recipe = {
  recipe_id: string;
  name: string;
};

type State = {
  list: Recipe[];
};

const initialState: State = {
  list: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<Recipe[]>) {
      state.list = action.payload;
    },
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.list.push(action.payload);
    },
  },
});

export const { setRecipes, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;