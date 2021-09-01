import { PopupHandlerService } from "src/app/services/popup-handler.service";
import { StaffSelectionService } from "src/app/services/staff-selection.service";
import { StaffServiceService } from "src/app/services/staff-service.service";
import { Staff } from "../staff";

export class TableBase{
    constructor(public staffService:StaffServiceService, public popupHandlerService:PopupHandlerService,public staffSelectionService:StaffSelectionService){
  
    }
    // id:string | undefined;
  
    // showDeleteConfirmationPopUp = false;
    staffIdforDelete: string | undefined;
    // selectedStaffs = new Set()
  
    handleDeleteBtnClick(id?:number) {
      this.staffIdforDelete = id?.toString();
      this.popupHandlerService.showDeleteConfirmationPopUp = true;
    }
    handleConfirmation(confirmation: string) {
      console.log(confirmation,this.staffIdforDelete);

      if (confirmation) {
        if (this.staffIdforDelete != undefined) {
          this.staffService.deleteStaff(this.staffIdforDelete).subscribe(() => {
            this.staffService.refreshStaff.next()
          })
        }
        
      }
      this.staffIdforDelete = undefined;
      this.popupHandlerService.showDeleteConfirmationPopUp = false;
    }
  
    // popupHandlerService.showAddStaffPopUp=false;
  
    handleAddStaffBtnClick(){
      this.popupHandlerService.showAddStaffPopUp=true
    }

    showUpdateForm(staff: Staff){
      console.log("showing update form")
      this.popupHandlerService.staffToUpdate=staff;
      this.popupHandlerService.showUpdateStaffPopUp=true;
    }
    
  
  }
  