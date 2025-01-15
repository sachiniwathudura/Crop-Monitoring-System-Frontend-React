export class Vehicle {
    vehicleCode : string;
    licensePlateNumber:string;
    vehicleCategory:string;
    fuelType:string;
    status:string;
    allocateStaffMember:string;
    remarks:string;

    constructor(vehicleCode: string, licensePlateNumber: string, vehicleCategory: string, fuelType: string, status: string, allocateStaffMember: string, remarks: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.allocateStaffMember = allocateStaffMember;
        this.remarks = remarks;
    }
}