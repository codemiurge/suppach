import {
    createSlice,
    type PayloadAction
} from "@reduxjs/toolkit";


export type Recipe = {
    recipe_id:string;
    name:string;
};


type RecipeState = {
    list:Recipe[];
};

const initialState:RecipeState = {
    list:[]
};

const recipeSlice=createSlice({
    name:"recipe",
    initialState,
    reducers:{
        setRecipes(
            state,
            action:PayloadAction<Recipe[]>
        ){
            state.list=action.payload;
        },

        addRecipe(
            state,
            action:PayloadAction<Recipe>
        ){
            state.list.push(action.payload);
        },

        updateRecipe(
            state,
            action:PayloadAction<Recipe>
        ){
            const index=
                state.list.findIndex(
                    r=>r.recipe_id===action.payload.recipe_id
                );

            if(index!==-1){
                state.list[index]=action.payload;
            }

        },

        deleteRecipe(
            state,
            action:PayloadAction<string>
        ){
            state.list=
                state.list.filter(
                    r=>r.recipe_id!==action.payload
                );
        }
    }
});

export const {
    setRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe
}=recipeSlice.actions;

export default recipeSlice.reducer;