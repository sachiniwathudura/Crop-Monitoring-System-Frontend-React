export class Equipment {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    equipmentStatus: string;
    staff : string;
    field : string;

    constructor(equipmentId: string, equipmentName: string, equipmentType: string, equipmentStatus: string, staff: string, field: string) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.equipmentStatus = equipmentStatus;
        this.staff = staff;
        this.field = field;
    }
}
