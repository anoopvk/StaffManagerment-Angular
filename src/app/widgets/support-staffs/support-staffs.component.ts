import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-support-staffs',
  templateUrl: './support-staffs.component.html',
  styleUrls: ['./support-staffs.component.css']
})
export class SupportStaffsComponent implements OnInit {
  staffs?:Staff[]|undefined;
  constructor(private staffService: StaffServiceService) { }

  ngOnInit(): void {
    this.staffService.getStaffsByType("SupportStaff").subscribe(res=>{
      this.staffs=res;
      console.log("data=",this.staffs)
    })
  }
  handleDeleteBtnClick(){

  }

}
