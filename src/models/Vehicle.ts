export class User {
    vehicleCode : string;
    licensePlateNumbr:string;
    vehicleCategory:string;
    fuelType:string;
    status:string;
    allocateStaffMember:string;
    remarks:string;

    constructor(vehicleCode: string, licensePlateNumbr: string, vehicleCategory: string, fuelType: string, status: string, allocateStaffMember: string, remarks: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumbr = licensePlateNumbr;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.allocateStaffMember = allocateStaffMember;
        this.remarks = remarks;
    }
}