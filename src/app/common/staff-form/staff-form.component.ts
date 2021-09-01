import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { staffTypes } from 'src/app/models/staffTypes';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {
  staffTypes: string[] = [];
  staffTypesEnum = staffTypes;
  @Input() formType: string;
  @Input() staffToUpdate: Staff | undefined;
  @Output() close = new EventEmitter();

  staff: Staff;

  constructor(public staffService: StaffServiceService, public popupHandlerService: PopupHandlerService) {
  }

  ngOnInit(): void {
    console.log(this.formType)
    for (var stafftype in staffTypes) {
      // console.log(stafftype)

      if (isNaN(Number(stafftype))) {
        this.staffTypes.push(stafftype)
      }
    }
    if (this.isUpdateForm()) {
      this.staff = this.popupHandlerService.staffToUpdate;
    }
    else {
      this.staff = new Staff();
      this.staff.staffType = 1
    }

  }

  handleCloseBtnClick() {
    this.popupHandlerService.showAddStaffPopUp = false;
    this.popupHandlerService.showUpdateStaffPopUp = false;
    this.popupHandlerService.staffToUpdate = undefined;
  }

  handleSubmitBtnClick() {
    if (this.formType == "add") {
      this.addStaff()
    }
    else {
      this.updateStaff()
    }
  }

  addStaff() {
    if (this.staff.staffType == 1) {
      this.staff.building = "";
      this.staff.subjectHandled = ""
    }
    else if (this.staff.staffType == 2) {
      this.staff.section = "";
      this.staff.subjectHandled = ""
    }
    else {
      this.staff.section = "";
      this.staff.building = "";
    }

    this.staffService.postStaff(this.staff).subscribe(() => {
      this.staffService.refreshStaff.next()
      // this.popupHandlerService.showAddStaffPopUp = false;
      this.handleCloseBtnClick()
    })
  }

  updateStaff() {
    this.staffService.putStaff(this.staff).subscribe(res => {
      console.log(res)
      this.staffService.refreshStaff.next()

      // this.popupHandlerService.showAddStaffPopUp = false;
      this.handleCloseBtnClick()
    })
  }

  isUpdateForm() {
    return this.formType == "update";
  }

}
