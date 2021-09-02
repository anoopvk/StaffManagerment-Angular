import { Component, OnInit } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { Staff } from 'src/app/models/staff';
import { PagingService } from 'src/app/services/paging.service';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffSelectionService } from 'src/app/services/staff-selection.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-teaching-staffs',
  templateUrl: './teaching-staffs.component.html',
  styleUrls: ['./teaching-staffs.component.css']
})
export class TeachingStaffsComponent extends TableBase implements OnInit {
  staffs?:Staff[]|undefined;
  constructor(staffService: StaffServiceService, popupHandlerService: PopupHandlerService, staffSelectionService: StaffSelectionService,public pagingService:PagingService) {
    super(staffService, popupHandlerService, staffSelectionService); }

  ngOnInit(): void {
    this.staffSelectionService.selectedStaffs = new Set();
    this.getTeachingStaffs();
    this.staffService.refreshStaff.subscribe(() => {
      this.getTeachingStaffs();
    })

  }
  getTeachingStaffs() {
    this.staffService.getStaffsByType("TeachingStaff").subscribe(
      res => { this.staffs = this.pagingService.paginateData(res) },
      error => { this.staffs = [] })
  }



}
