import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../models/Field";

interface FieldState {
    fields: Field[];
}

const initialState: FieldState = {
    fields: [], // Initialize with an empty array
};

export const FieldSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        addField: (state, action: PayloadAction<Field>) => {
            state.fields.push(action.payload);
        },
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.fields.findIndex(
                field => field.fieldCode === action.payload.fieldCode
            );
            if (index >= 0) {
                state.fields[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<string>) => {
            state.fields = state.fields.filter(
                field => field.fieldCode !== action.payload
            );
        }
    }
});

export const { addField, updateField, deleteField } = FieldSlice.actions;
export default FieldSlice.reducer;
