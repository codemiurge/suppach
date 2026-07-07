import {
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";

export const BATCH_STATUSES = [
    "Ожидание проверки",
    "В работе",
    "Допущена",
    "Отклонена",
    "Утилизация",
] as const;

export type BatchStatus = typeof BATCH_STATUSES[number];

export interface Batch {
    id: string;
    name: string;
    status: BatchStatus;
    recipe_id: string | null;
    quantity_units: number;
    capsules_per_unit: number;
    total_capsules: number;
}

interface BatchState {
    list: Batch[];
}

const initialState: BatchState = {
    list: [],
};

const batchSlice = createSlice({
    name: "batch",

    initialState,

    reducers: {
        setBatches(state, action: PayloadAction<Batch[]>) {
            state.list = action.payload;
        },

        addBatch(state, action: PayloadAction<Batch>) {
            state.list.push(action.payload);
        },

        updateBatch(state, action: PayloadAction<Batch>) {
            const index = state.list.findIndex(
                batch => batch.id === action.payload.id
            );

            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },

        deleteBatch(state, action: PayloadAction<string>) {
            state.list = state.list.filter(
                batch => batch.id !== action.payload
            );
        },
    },
});

export const {
    setBatches,
    addBatch,
    updateBatch,
    deleteBatch,
} = batchSlice.actions;

export default batchSlice.reducer;