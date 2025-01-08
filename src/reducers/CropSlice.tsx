// src/reducers/CropSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    crops: [],
};

export const cropSlice = createSlice({
    name: "crops",
    initialState,
    reducers: {
        saveCrop(state, action) {
            state.crops.push(action.payload);
        },
        removeCrop(state, action) {
            state.crops = state.crops.filter((_, index) => index !== action.payload);
        },
        updateCrop(state, action) {
            const { index, updatedCrop } = action.payload;
            if (index >= 0 && index < state.crops.length) {
                state.crops[index] = { ...state.crops[index], ...updatedCrop };
            }
        },
    },
});

export const { saveCrop, removeCrop, updateCrop } = cropSlice.actions;
export default cropSlice.reducer;