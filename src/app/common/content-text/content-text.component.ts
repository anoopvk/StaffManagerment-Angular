import { Component, OnInit } from '@angular/core';
import { TableBase } from 'src/app/models/base/tableBase';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffSelectionService } from 'src/app/services/staff-selection.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css']
})
export class ContentTextComponent extends TableBase implements OnInit {

  constructor(staffService: StaffServiceService, popupHandlerService: PopupHandlerService, public staffSelectionService: StaffSelectionService) {
    super(staffService, popupHandlerService, staffSelectionService);
  }

  ngOnInit(): void {
  }

}
