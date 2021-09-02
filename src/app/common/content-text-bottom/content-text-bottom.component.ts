import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';
import { PopupHandlerService } from 'src/app/services/popup-handler.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-content-text-bottom',
  templateUrl: './content-text-bottom.component.html',
  styleUrls: ['./content-text-bottom.component.css']
})
export class ContentTextBottomComponent implements OnInit {

  constructor(public staffService: StaffServiceService, public popupHandlerService: PopupHandlerService,public pagingService:PagingService) { }
  pages=[]
  ngOnInit(): void {
    console.log(this.pagingService.totalPages)
    this.pagingService.totalPages.subscribe(res=>{
      console.log(this.pages)
      this.pages=[]
      for (let index = 1; index <= res; index++) {
        this.pages.push(index)
      }
    })
  }
  setPage(page){
    this.pagingService.currentPage=page;
    this.staffService.refreshStaff.next()
    
  }
  handleDeleteSelectedBtnClick() {
    console.log("handleDeleteAllBtnClick")
    this.popupHandlerService.setDeleteSelected();
    this.popupHandlerService.showDeleteConfirmationPopUp = true;
  }
}
