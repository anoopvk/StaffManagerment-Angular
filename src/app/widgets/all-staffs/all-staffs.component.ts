import { Component, OnInit, Output } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffSelectionService } from 'src/app/services/staff-selection.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';
import { Staff } from '../../models/staff'
import { staffTypes } from '../../models/staffTypes'


@Component({
  selector: 'app-all-staffs',
  templateUrl: './all-staffs.component.html',
  styleUrls: ['./all-staffs.component.css']
})


export class AllStaffsComponent  extends TableBase implements OnInit{

  staffs: Staff[] =[];
  staffTypeEnum = staffTypes;
  showDeleteConfirmationPopUp = false;
  // staffIdforDelete: number | undefined;
  
  constructor( staffService: StaffServiceService,popupHandlerService:PopupHandlerService,public staffSelectionService:StaffSelectionService) {
    super(staffService,popupHandlerService,staffSelectionService);
  }
  
  ngOnInit(): void {
    this.staffSelectionService.selectedStaffs=new Set()
    this.getAllStaffs();
    this.staffService.refreshStaff.subscribe(() => {
      this.getAllStaffs();
    })
  }

  getAllStaffs() {
    this.staffService.getStaffsByType("").subscribe(res => {
      // res.forEach(v=>{
      //   this.staffs.push(new Staff())
      // })
      this.staffs=res;
      
      console.log("data=", this.staffs)
      console.log(staffTypes)
    })
  }

  
 


  

}
