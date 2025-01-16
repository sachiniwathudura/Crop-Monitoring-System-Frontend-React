import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cropSlice from "../reducers/CropSlice";
import equipmentSlice from "../reducers/EquipmentSlice";
import staffSlice from "../reducers/StaffSlice";
import vehicleSlice from "../reducers/VehicleSlice";
import fieldSlice from "../reducers/FieldSlice";
import monitoringLogSlice from "../reducers/MonitoringLogSlice";

const rootReducer = combineReducers({
    crops: cropSlice,
    equipments:equipmentSlice,
    staff: staffSlice,
    vehicles: vehicleSlice,
    fields: fieldSlice,
    mLogs:monitoringLogSlice,

    // Add other reducers (e.g., equipments, staff, vehicles) if needed.
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;