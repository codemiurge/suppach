import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Worker = {
  worker_id: string;
  name: string;
  worker_role: string;
};

type State = {
  list: Worker[];
};

const initialState: State = {
  list: [],
};

const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    setWorkers(state, action: PayloadAction<Worker[]>) {
      state.list = action.payload;
    },

    addWorker(state, action: PayloadAction<Worker>) {
      state.list.push(action.payload);
    },
  },
});

export const { setWorkers, addWorker } = workerSlice.actions;
export default workerSlice.reducer;