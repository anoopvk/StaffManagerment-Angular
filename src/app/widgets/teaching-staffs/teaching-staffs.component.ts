import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-teaching-staffs',
  templateUrl: './teaching-staffs.component.html',
  styleUrls: ['./teaching-staffs.component.css']
})
export class TeachingStaffsComponent implements OnInit {
  staffs?:Staff[]|undefined;
  constructor(private staffService: StaffServiceService) { }

  ngOnInit(): void {
    this.staffService.getStaffsByType("TeachingStaff").subscribe(res=>{
      this.staffs=res;
      console.log("data=",this.staffs)
    })
  }
  handleDeleteBtnClick(){
    
  }

}
