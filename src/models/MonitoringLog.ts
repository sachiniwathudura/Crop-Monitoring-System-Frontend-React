export class MonitoringLog{
    logCode: string;
    logDate : Date;
    logDetails : string;
    ObservedImage : string;
    field: string;
    crops: string;
    staff: string;


    constructor(logCode: string, logDate: Date, logDetails: string, ObservedImage: string, field: string, crops: string, staff: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.ObservedImage = ObservedImage;
        this.field = field;
        this.crops = crops;
        this.staff = staff;
    }
}