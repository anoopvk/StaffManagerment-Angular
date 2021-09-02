import { Component, OnInit } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { Staff } from 'src/app/models/staff';
import { PagingService } from 'src/app/services/paging.service';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffSelectionService } from 'src/app/services/staff-selection.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-support-staffs',
  templateUrl: './support-staffs.component.html',
  styleUrls: ['./support-staffs.component.css']
})
export class SupportStaffsComponent extends TableBase implements OnInit {
  staffs?:Staff[]|undefined;
  constructor( staffService: StaffServiceService, popupHandlerService: PopupHandlerService, staffSelectionService: StaffSelectionService,public pagingService:PagingService) {
    super(staffService, popupHandlerService, staffSelectionService); }

  ngOnInit(): void {
    this.staffSelectionService.selectedStaffs = new Set();
    this.getSupportStaffs();
    this.staffService.refreshStaff.subscribe(() => {
      this.getSupportStaffs();
    })

  }
  getSupportStaffs() {
    this.staffService.getStaffsByType("SupportStaff").subscribe(
      res => { this.staffs = this.pagingService.paginateData(res) },
      error => { this.staffs = [] })
  }

}
