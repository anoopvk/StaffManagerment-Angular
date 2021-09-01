import { error } from "@angular/compiler/src/util";
import { PopupHandlerService } from "src/app/services/popup-handler.service";
import { StaffSelectionService } from "src/app/services/staff-selection.service";
import { StaffServiceService } from "src/app/services/staff-service.service";
import { Staff } from "../staff";

export class TableBase {
  constructor(public staffService: StaffServiceService, public popupHandlerService: PopupHandlerService, public staffSelectionService: StaffSelectionService) {

  }

  handleDeleteBtnClick(id: number) {
    console.log("id=", id)
    this.popupHandlerService.staffIdToDelete = id.toString();
    this.popupHandlerService.showDeleteConfirmationPopUp = true;
    this.popupHandlerService.setDeleteOne();

  }

  handleDeleteAllBtnClick() {
    console.log("handleDeleteAllBtnClick")
    this.popupHandlerService.setDeleteAll();
    this.popupHandlerService.showDeleteConfirmationPopUp = true;
  }

  handleConfirmation(confirmation: string) {
    console.log(confirmation, this.popupHandlerService.staffIdToDelete);


    if (confirmation) {
      console.log(this.popupHandlerService.isDeleteOne(), this.popupHandlerService.isDeleteSelected(), this.popupHandlerService.isDeleteAll());

      if (this.popupHandlerService.isDeleteOne() && this.popupHandlerService.staffIdToDelete != undefined) {
        this.staffService.deleteStaff(this.popupHandlerService.staffIdToDelete).subscribe(() => {
          this.staffService.refreshStaff.next()
        })
      }
      else if (this.popupHandlerService.isDeleteSelected()) {
        this.staffSelectionService.selectedStaffs.forEach(id => {
          this.staffService.deleteStaff(id.toString()).subscribe(() => {
            this.staffService.refreshStaff.next()
          })
        })
        this.staffSelectionService.selectedStaffs=new Set();
      }
      else if (this.popupHandlerService.isDeleteAll()) {
        this.staffService.getStaffsByType("").subscribe(res => {
          res.forEach((staff) => {
            this.staffService.deleteStaff((staff.id).toString()).subscribe(() => {
              this.staffService.refreshStaff.next()
            })
          })
        })

      }
    }
    this.popupHandlerService.resetDeleteFlags();
   
  }

  // popupHandlerService.showAddStaffPopUp=false;

  handleAddStaffBtnClick() {
    this.popupHandlerService.showAddStaffPopUp = true
  }

  showUpdateForm(staff: Staff) {
    console.log("showing update form")
    this.popupHandlerService.staffToUpdate = staff;
    this.popupHandlerService.showUpdateStaffPopUp = true;
  }


}
