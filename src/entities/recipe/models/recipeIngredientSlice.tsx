import {
    createSlice,
    type PayloadAction
} from "@reduxjs/toolkit";


export type RecipeIngredient = {
    recipe_id: string;
    ingredient_id: string;
    amount_mg: number;
};


type State = {
    list: RecipeIngredient[];
};


const initialState: State = {
    list: []
};


const slice = createSlice({
    name: "recipeIngredient",
    initialState,
    reducers: {
        setRecipeIngredients(
            state,
            action: PayloadAction<RecipeIngredient[]>
        ) {
            state.list = action.payload;
        },

        addRecipeIngredient(
            state,
            action: PayloadAction<RecipeIngredient>
        ) {
            state.list.push(action.payload);
        },

        deleteRecipeIngredient(
            state,
            action: PayloadAction<{
                recipe_id: string;
                ingredient_id: string;
            }>
        ) {
            state.list = state.list.filter(
                item =>
                    !(
                        item.recipe_id === action.payload.recipe_id &&
                        item.ingredient_id === action.payload.ingredient_id
                    )
            );
        }
    }
});


export const {
    setRecipeIngredients,
    addRecipeIngredient,
    deleteRecipeIngredient
} = slice.actions;


export default slice.reducer;