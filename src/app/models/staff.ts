import { staffTypes } from "./staffTypes";

export class Staff{
    public id:number ;
    public name:string ;
    public staffType:staffTypes ;
    public section:string ;
    public subjectHandled:string ;
    public building:string ;
    
    // constructor(staff:Staff=null){
    //     this.id=staff.id
    //     this.name=staff.name
    //     this.staffType=staff.staffType
    //     this.section=staff.section
    //     this.subjectHandled=staff.subjectHandled
    //     this.building=staff.building
    // }
}