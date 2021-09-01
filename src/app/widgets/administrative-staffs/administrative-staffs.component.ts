import { Component, OnInit } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { Staff } from 'src/app/models/staff';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffSelectionService } from 'src/app/services/staff-selection.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-administrative-staffs',
  templateUrl: './administrative-staffs.component.html',
  styleUrls: ['./administrative-staffs.component.css']
})
export class AdministrativeStaffsComponent extends TableBase implements OnInit {
  staffs?: Staff[] | undefined;

  constructor(staffService: StaffServiceService, popupHandlerService: PopupHandlerService, staffSelectionService: StaffSelectionService) {
    super(staffService, popupHandlerService, staffSelectionService);
  }

  ngOnInit(): void {
    this.staffSelectionService.selectedStaffs = new Set();
    this.getAdministrativeStaffs();
    this.staffService.refreshStaff.subscribe(() => {
      this.getAdministrativeStaffs();
    })

  }
  getAdministrativeStaffs() {
    this.staffService.getStaffsByType("AdministrativeStaff").subscribe(
      res => { this.staffs = res },
      error => { this.staffs = [] })
  }

}
