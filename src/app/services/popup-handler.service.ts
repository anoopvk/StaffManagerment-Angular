import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class PopupHandlerService {
  public showDeleteConfirmationPopUp=false;
  public showAddStaffPopUp=false;
  public showUpdateStaffPopUp=false;
  public staffToUpdate:Staff;

  constructor() { }


}
