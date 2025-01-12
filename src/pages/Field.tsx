export function Field(){

    return(
        <>
            <div
                className="col-span-12 lg:col-span-10 p-4 fixed left-44 top-0 w-[calc(100%-176px)] h-screen p-4 overflow-y-auto">
                <h1 className="text-4xl font-bold text-center my-4">Field Management</h1>

                <div className="flex justify-between items-center mb-3">
                    <input
                        type="text"
                        className="form-input w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Search field"/>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400">
                        Add Field
                    </button>
                </div>


                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-gray-200 text-green-700">
                    <tr>
                        <th className="px-4 py-2 border">Select</th>
                        <th className="px-4 py-2 border">Field Code</th>
                        <th className="px-4 py-2 border">Field Name</th>
                        <th className="px-4 py-2 border">Extent Size</th>
                        <th className="px-4 py-2 border">Field Location</th>
                        <th className="px-4 py-2 border">Image1</th>
                        <th className="px-4 py-2 border">Image2</th>
                        <th className="px-4 py-2 border">Equipment Code</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 hidden"
                 id="addFieldModal">
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <h5 className="text-lg font-bold">Field Details</h5>
                        <button className="text-gray-500 hover:text-gray-700"
                                onClick="closeModal('addFieldModal')">&times;</button>
                    </div>
                    <div className="p-4">
                        <form id="equipmenFormt" className="space-y-4">5
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="equipmentCode" className="block font-medium">Field Code</label>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="equipmentCode"
                                        placeholder="Enter Equipment Code"/>
                                </div>
                                <div>
                                    <label htmlFor="equipmentName" className="block font-medium">Field Name</label>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="equipmentName"
                                        placeholder="Enter Equipment Name"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="type" className="block font-medium">Extent Size</label>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="type"
                                        placeholder="Enter type"/>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="status" className="block font-medium">Status</label>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="status"
                                        placeholder="Enter Status"/>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="flex justify-end space-x-2 px-4 py-2 border-t">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                            onClick="saveEquipment()">Save
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
                            onClick="updateEquipment()">Update
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400"
                            onClick="getAllEquipments()">Get All
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                            onClick="deleteEquipment()">Delete
                        </button>
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-400"
                            onClick="closeModal('addEquipmentModal')">Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}