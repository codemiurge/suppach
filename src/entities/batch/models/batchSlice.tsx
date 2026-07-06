import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Batch = {
  id: string;
  name: string;
  status: string;
  recipe_id: string | null;
};

type State = {
    list: Batch[]
}

const initialState: State = {
    list: []
}

const batchSlice = createSlice({
    name: "batch",
    initialState: initialState,
    reducers:{
        addBatch(state, action: PayloadAction<Batch>){
            state.list.push(action.payload)
        },
        
        setBatches(state, action: PayloadAction<Batch[]>){
            state.list = action.payload;
        },
        updateBatchStatus(state, action: PayloadAction<{id:string, status:string}>){
            const b = state.list.find((el) => el.id === action.payload.id);
            if (b) b.status = action.payload.status;
        },
    }
})

export const {addBatch, setBatches, updateBatchStatus} = batchSlice.actions;