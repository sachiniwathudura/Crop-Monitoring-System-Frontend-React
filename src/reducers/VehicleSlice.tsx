import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Vehicle } from "../models/Vehicle";


interface VehicleState {
    vehicles: Vehicle[];
}

const initialState: VehicleState = {
    vehicles: [],  // Initialize with an empty array
}

export const VehicleSlice = createSlice({
    name:'vehicles',
    initialState,
    reducers:{
        addVehicle: (state, action: PayloadAction<Vehicle>) => {
            state.vehicles.push(action.payload);
        },
        updateVehicle: (state, action : PayloadAction<Vehicle>) => {
            const index = state.vehicles.findIndex(
                vehicle => vehicle.vehicleCode === action.payload.vehicleCode
            );
            if (index >= 0) {
                state.vehicles[index] = action.payload;
            }
        },
        deleteVehicle: (state, action : PayloadAction<String>) => {
            state.vehicles = state.vehicles.filter(
                vehicle => vehicle.vehicleCode !== action.payload
            );
        }
    }

})


export const { addVehicle,updateVehicle,deleteVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer;
