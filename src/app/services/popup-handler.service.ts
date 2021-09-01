import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class PopupHandlerService {
  private deleteOne = false;
  private deleteSelected = false;
  private deleteAll = false;

  public showDeleteConfirmationPopUp = false;
  public staffIdToDelete = undefined;

  public showAddStaffPopUp = false;

  public showUpdateStaffPopUp = false;
  public staffToUpdate: Staff;

  setDeleteOne() {
    this.deleteOne = true;
    this.deleteSelected = false;
    this.deleteAll = false;
  }
  setDeleteSelected() {
    this.deleteOne = false;
    this.deleteSelected = true;
    this.deleteAll = false;
  }
  setDeleteAll() {
    this.deleteOne = false;
    this.deleteSelected = false;
    this.deleteAll = true;
  }
  isDeleteOne() {
    return this.deleteOne;
  }
  isDeleteSelected() {
    return this.deleteSelected;
  }
  isDeleteAll() {
    return this.deleteAll;
  }
  resetDeleteFlags() {
    this.deleteOne = false;
    this.deleteSelected = false;
    this.deleteAll = false;
    this.showDeleteConfirmationPopUp=false;
    this.staffIdToDelete = undefined;
  
  }


  constructor() { }


}
