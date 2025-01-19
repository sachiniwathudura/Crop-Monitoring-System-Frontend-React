import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { addField, updateField, deleteField } from "../reducers/FieldSlice";


export function Field() {
    const fields = useSelector((state: RootState) => state.fields.fields || []);
    const dispatch = useDispatch();

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // New Field state
    const [newField, setNewField] = useState<{
        fieldCode: string;
        fieldName: string;
        fieldLocation: string;
        fieldSize: string;
        crops: string;
        staff: string;
        fieldImage1: string;
        fieldImage2: string;
    }>({
        fieldCode: "",
        fieldName: "",
        fieldLocation: "",
        fieldSize: "",
        crops: "",
        staff: "",
        fieldImage1: "",
        fieldImage2: "",
    });

    // Handlers for modal visibility
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="col-span-12 lg:col-span-10 p-4 fixed left-44 top-0 w-[calc(100%-176px)] h-screen overflow-y-auto">
                <h1 className="text-4xl font-bold text-center my-4">Field Management</h1>

                <div className="flex justify-between items-center mb-3">
                    <input
                        type="text"
                        className="form-input w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Search field"
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
                        onClick={openModal}
                    >
                        Add Field
                    </button>
                </div>

                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-gray-200 text-green-700">
                    <tr>
                        <th className="px-4 py-2 border">Select</th>
                        <th className="px-4 py-2 border">Field Code</th>
                        <th className="px-4 py-2 border">Field Name</th>
                        <th className="px-4 py-2 border">Field Image</th>
                        <th className="px-4 py-2 border">Location</th>
                        <th className="px-4 py-2 border">Size</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fields.map((field, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border">
                                <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2 border">{field.fieldCode}</td>
                            <td className="px-4 py-2 border">{field.fieldName}</td>
                            <td className="px-4 py-2 border">{field.fieldLocation}</td>
                            <td className="px-4 py-2 border">{field.fieldSize}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className="text-red-500"
                                    onClick={() => dispatch(deleteField(field.fieldCode))}
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
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ">
                    <div className="rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 bg-transparent"
                         style={{
                             backgroundImage: "url('src/assets/images/d2.jpg')",
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }}>
                        <div className="flex justify-between items-center px-4 py-2 border-b bg-green-200">
                            <h5 className="text-lg text-black font-bold">Field Details</h5>
                            <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fieldCode" className="block font-medium">
                                            Field Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="fieldCode"
                                            placeholder="Enter Field Code"
                                            value={newField.fieldCode}
                                            onChange={(e) => setNewField({ ...newField, fieldCode: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fieldName" className="block font-medium">
                                            Field Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="fieldName"
                                            placeholder="Enter Field Name"
                                            value={newField.fieldName}
                                            onChange={(e) => setNewField({ ...newField, fieldName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fieldLocation" className="block font-medium">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="fieldLocation"
                                            placeholder="Enter Field Location"
                                            value={newField.fieldLocation}
                                            onChange={(e) => setNewField({ ...newField, fieldLocation: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fieldSize" className="block font-medium">
                                            Size
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="fieldSize"
                                            placeholder="Enter Field Size"
                                            value={newField.fieldSize}
                                            onChange={(e) => setNewField({ ...newField, fieldSize: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="crops" className="block font-medium">
                                        Crops
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="crops"
                                        placeholder="Enter Crops"
                                        value={newField.crops}
                                        onChange={(e) => setNewField({ ...newField, crops: e.target.value })}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="flex justify-end space-x-2 px-4 py-2 border-t">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                                onClick={() => dispatch(addField(newField))}
                            >
                                Save
                            </button>
                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
                                onClick={() => dispatch(updateField(newField))}
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
