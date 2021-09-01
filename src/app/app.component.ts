import { Component } from '@angular/core';
import { TableBase } from './models/base/tableBase';
import { PopupHandlerService } from './services/popup-handler.service';
import { StaffSelectionService } from './services/staff-selection.service';
import { StaffServiceService } from './services/staff-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends TableBase {
  title = 'StaffManagerAngular';
  constructor( staffService: StaffServiceService,popupHandlerService:PopupHandlerService,public staffSelectionService:StaffSelectionService) {
    super(staffService,popupHandlerService,staffSelectionService);
    // this.staffService.getStaffsByType().subscribe(res=>{
    //   console.log(res);
    // })
  }
}
