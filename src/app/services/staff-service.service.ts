import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  public refreshStaff:Subject<void>=new Subject();
  public $refresh:Observable<void>=this.refreshStaff.asObservable();

  getStaffsByType(staffType="") {
    console.log("sdas")
    return this.http.get<Staff[]>("http://staffmanagementapi.local/api/staffs?staffType="+staffType);
  }

  deleteStaff(id:string){
    return this.http.delete('http://staffmanagementapi.local/api/staffs/'+id)
  }
  deleteAllStaff(){
    
  }
  postStaff(staff:Staff){
    return this.http.post('http://staffmanagementapi.local/api/staffs',staff)
  }
  putStaff(staff:Staff){
    return this.http.put('http://staffmanagementapi.local/api/staffs/'+staff.id,staff)

  }
  constructor(private http:HttpClient) {
    // this.getStaffsByType();
   }
}
