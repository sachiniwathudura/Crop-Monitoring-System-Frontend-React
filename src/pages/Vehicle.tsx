import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addVehicle, updateVehicle, deleteVehicle } from "../reducers/VehicleSlice";


export function Vehicle() {
    const vehicles = useSelector((state: RootState) => state.vehicles.vehicles|| []);

    const dispatch = useDispatch();
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    // New Equipment state
    const [newVehicle, setNewVehicle] = useState<{
        vehicleCode : string;
        licensePlateNumber:string;
        vehicleCategory:string;
        fuelType:string;
        status:string;
        allocateStaffMember:string;
        remarks:string;
    }>({
        vehicleCode: "",
        licensePlateNumber: "",
        vehicleCategory: "",
        fuelType: "",
        status: "",
        allocateStaffMember : "",
        remarks: "",
    });

    // Handlers for modal visibility
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div
                className="col-span-12 lg:col-span-10 p-4 fixed left-44 top-0 w-[calc(100%-176px)] h-screen overflow-y-auto">
                <h1 className="text-4xl font-bold text-center my-4">Vehicle Management</h1>

                <div className="flex justify-between items-center mb-3">
                    <input
                        type="text"
                        className="form-input w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Search vehicle"
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
                        onClick={openModal}
                    >
                        Add Vehicle
                    </button>
                </div>

                {/*<table className="table-auto w-full border border-gray-300">*/}
                {/*    <thead className="bg-gray-200 text-green-700">*/}
                {/*    <tr>*/}
                {/*        <tr>*/}
                {/*            <th className="px-4 py-2 border">Select</th>*/}
                {/*            <th className="px-4 py-2 border">Vehicle Code</th>*/}
                {/*            <th className="px-4 py-2 border">License Plate Number</th>*/}
                {/*            <th className="px-4 py-2 border">Vehicle Category</th>*/}
                {/*            <th className="px-4 py-2 border">Fuel Type</th>*/}
                {/*            <th className="px-4 py-2 border">Status</th>*/}
                {/*            <th className="px-4 py-2 border">Allocate Staff Member</th>*/}
                {/*            <th className="px-4 py-2 border">Remarks</th>*/}
                {/*            <th className="px-4 py-2 border">Actions</th>*/}
                {/*        </tr>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {vehicles.map((vehicle, index) => (*/}
                {/*        <tr key={index}>*/}
                {/*            <td className="px-4 py-2 border">*/}
                {/*                <input type="checkbox"/>*/}
                {/*            </td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.vehicleCode}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.licensePlateNumber}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.vehicleCategory}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.fuelType}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.status}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.allocateStaffMember}</td>*/}
                {/*            <td className="px-4 py-2 border">{vehicle.remarks}</td>*/}
                {/*            <td className="px-4 py-2 border">*/}
                {/*                <button*/}
                {/*                    className="text-red-500"*/}
                {/*                    onClick={() => dispatch(deleteVehicle(vehicle.vehicleCode))}*/}
                {/*                >*/}
                {/*                    Delete*/}
                {/*                </button>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    ))}*/}
                {/*    </tbody>*/}
                {/*</table>*/}
                <table className="min-w-full  border">
                    <thead className="bg-gray-200 text-green-700">
                    <tr>
                        <th className="px-4 py-2 border">Select</th>
                        <th className="px-4 py-2 border">Vehicle Code</th>
                        <th className="px-4 py-2 border">License Plate Number</th>
                        <th className="px-4 py-2 border">Vehicle Category</th>
                        <th className="px-4 py-2 border">Fuel Type</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Allocate Staff Member</th>
                        <th className="px-4 py-2 border">Remarks</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border">
                                <input type="checkbox"/>
                            </td>
                            <td className="px-4 py-2 border">{vehicle.vehicleCode}</td>
                            <td className="px-4 py-2 border">{vehicle.licensePlateNumber}</td>
                            <td className="px-4 py-2 border">{vehicle.vehicleCategory}</td>
                            <td className="px-4 py-2 border">{vehicle.fuelType}</td>
                            <td className="px-4 py-2 border">{vehicle.status}</td>
                            <td className="px-4 py-2 border">{vehicle.allocateStaffMember}</td>
                            <td className="px-4 py-2 border">{vehicle.remarks}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className="text-red-500"
                                    onClick={() => dispatch(deleteVehicle(vehicle.vehicleCode))}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <div className="flex justify-between items-center px-4 py-2 border-b">
                            <h5 className="text-lg font-bold">Vehicle Details</h5>
                            <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="vehicleCode" className="block font-medium">
                                            Vehicle Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="vehicleCode"
                                            placeholder="Enter vehicleCode"
                                            value={newVehicle.vehicleCode}
                                            onChange={(e) => setNewVehicle({
                                                ...newVehicle,
                                                vehicleCode: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div>
                                    <label htmlFor="name" className="block font-medium">
                                            License Plate Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="name"
                                            placeholder="Enter license Plate Number"
                                            value={newVehicle.licensePlateNumber}
                                            onChange={(e) => setNewVehicle({...newVehicle, licensePlateNumber: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="type" className="block font-medium">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="type"
                                            placeholder="Enter Category"
                                            value={newVehicle.vehicleCategory}
                                            onChange={(e) => setNewVehicle({
                                                ...newVehicle,
                                                vehicleCategory: e.target.value
                                            })}

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fuelType" className="block font-medium">
                                            Fuel Type
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="fuelType"
                                            placeholder="Enter Fuel Type"
                                            value={newVehicle.fuelType}
                                            onChange={(e) => setNewVehicle({...newVehicle, fuelType: e.target.value})}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="status" className="block font-medium">
                                            Status
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="status"
                                            placeholder="Enter Status"
                                            value={newVehicle.status}
                                            onChange={(e) => setNewVehicle({...newVehicle, status: e.target.value})}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="allocateStaffMember" className="block font-medium">
                                            Allocate Staff Member
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="allocateStaffMember"
                                            placeholder="Enter Staff Member"
                                            value={newVehicle.allocateStaffMember}
                                            onChange={(e) => setNewVehicle({
                                                ...newVehicle,
                                                allocateStaffMember: e.target.value
                                            })}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="remarks" className="block font-medium">
                                            Remarks
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="remarks"
                                            placeholder="Enter Remarks"
                                            value={newVehicle.remarks}
                                            onChange={(e) => setNewVehicle({...newVehicle, remarks: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="flex justify-end space-x-2 px-4 py-2 border-t">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                                onClick={() => dispatch(addVehicle(newVehicle))}
                            >
                                Save
                            </button>
                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
                                onClick={() => dispatch(updateVehicle(newVehicle))}
                            >
                                Update
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}