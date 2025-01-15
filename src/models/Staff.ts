export class Staff{
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinedDate: string;
    DOB: string;
    address: string;
    contactNumber: string;
    email: string;
    role: string;
    field: string;
    vehicle: string;


    constructor(id: string, firstName: string, lastName: string, designation: string, gender: string, joinedDate: string, DOB: string, address: string, contactNumber: string, email: string, role: string, field: string, vehicle: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.DOB = DOB;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
        this.field = field;
        this.vehicle = vehicle;
    }
}