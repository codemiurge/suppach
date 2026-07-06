import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type QualityTest = {
  qualityTestId: string;
  batchId: string;
  workerId: string;
  methodType: string;
  testDate: string;
  testResult: string;
};

type State = {
  list: QualityTest[];
};

const initialState: State = {
  list: [],
};

const qualityTestSlice = createSlice({
  name: "qualityTest",
  initialState,
  reducers: {
    setQualityTests(state, action: PayloadAction<QualityTest[]>) {
      state.list = action.payload;
    },

    addQualityTest(state, action: PayloadAction<QualityTest>) {
      state.list.push(action.payload);
    },
  },
});

export const { setQualityTests, addQualityTest } = qualityTestSlice.actions;
export default qualityTestSlice.reducer;