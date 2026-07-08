import {
    createSlice,
    type PayloadAction
} from "@reduxjs/toolkit";


export type Ingredient = {
    id: string;
    name: string;
    unit: string;
    stock: number;
    warehouse_id: string;
};


interface IngredientState {
    list: Ingredient[];
}


const initialState: IngredientState = {
    list: []
};


const ingredientSlice = createSlice({
    name: "ingredient",

    initialState,

    reducers: {
        setIngredients(
            state,
            action: PayloadAction<Ingredient[]>
        ) {
            state.list = action.payload;
        },


        addIngredient(
            state,
            action: PayloadAction<Ingredient>
        ) {
            state.list.push(action.payload);
        },


        updateIngredient(
            state,
            action: PayloadAction<Ingredient>
        ) {
            const index = state.list.findIndex(
                ingredient =>
                    ingredient.id === action.payload.id
            );

            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },


        deleteIngredient(
            state,
            action: PayloadAction<string>
        ) {
            state.list = state.list.filter(
                ingredient =>
                    ingredient.id !== action.payload
            );
        }
    }
});


export const {
    setIngredients,
    addIngredient,
    updateIngredient,
    deleteIngredient
} = ingredientSlice.actions;


export default ingredientSlice.reducer;