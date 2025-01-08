import {configureStore} from "@reduxjs/toolkit";
// import vehicleReducer from "../reducers/VehicleSlice.tsx";
// import equipmentReducer from "../reducers/EquipmentSlice.tsx"
// import staffReducer from "../reducers/StaffSlice.tsx"
import cropReducer from "../reducers/CropSlice"

export const store=configureStore({
    reducer:{
        crops:cropReducer,
        // vehicles:vehicleReducer,
        // equipments:equipmentReducer,
        // staff:staffReducer,

    },
});