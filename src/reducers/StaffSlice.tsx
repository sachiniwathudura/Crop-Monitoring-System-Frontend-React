import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff";

interface StaffState {
    staff: Staff[];
}
export const initialState:StaffState={
    staff:[],
};
export const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        addStaff:(state,action:PayloadAction<Staff>)=>{
            state.staff.push(action.payload);
        },
        removeStaff:(state,action:PayloadAction<string>)=>{
            state.staff=state.staff.filter(
                staff => staff.id !== action.payload);
        },
        updateStaff:(state,action)=>{
            const index = state.staff.findIndex(
                staff => staff.id === action.payload.id
            );
            if (index >= 0) {
                state.staff[index] = action.payload;
            }
        }
    }
})
export const {addStaff, removeStaff,updateStaff} = staffSlice.actions;
export default staffSlice.reducer;