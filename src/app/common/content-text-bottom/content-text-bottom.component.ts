import { Component, OnInit } from '@angular/core';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';

@Component({
  selector: 'app-content-text-bottom',
  templateUrl: './content-text-bottom.component.html',
  styleUrls: ['./content-text-bottom.component.css']
})
export class ContentTextBottomComponent implements OnInit {

  constructor(public popupHandlerService: PopupHandlerService) { }

  ngOnInit(): void {
  }
  handleDeleteSelectedBtnClick() {
    console.log("handleDeleteAllBtnClick")
    this.popupHandlerService.setDeleteSelected();
    this.popupHandlerService.showDeleteConfirmationPopUp = true;
  }
}
