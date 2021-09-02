import { error } from '@angular/compiler/src/util';
import { Component, OnInit, Output } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { PagingService } from 'src/app/services/paging.service';
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


export class AllStaffsComponent extends TableBase implements OnInit {

  staffs: Staff[] = [];
  staffTypeEnum = staffTypes;
  showDeleteConfirmationPopUp = false;
  // staffIdforDelete: number | undefined;

  constructor(staffService: StaffServiceService, popupHandlerService: PopupHandlerService, public staffSelectionService: StaffSelectionService, public pagingService:PagingService) {
    super(staffService, popupHandlerService, staffSelectionService);

  }

  ngOnInit(): void {
    this.staffSelectionService.selectedStaffs = new Set()
    this.getAllStaffs();
    this.staffService.refreshStaff.subscribe(() => {
      this.getAllStaffs();
    })
    // console.log(this.staffs)
  }

  getAllStaffs() {
    this.staffService.getStaffsByType("").subscribe(
      res => { this.staffs = this.pagingService.paginateData(res) },
      error => { this.staffs = [] })
  }







}
