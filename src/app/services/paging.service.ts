import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  // public currentPage: Subject<number>=new Subject();
  public currentPage: number;

  public rowsPerPage: number;
  // public totalPages: number;
  // public totalPages:Observable<number>
  public totalPages:Subject<number>=new Subject();
  // public $totalPages:Observable<any>=this.totalPages.asObservable();
  private start:number;
  private end:number;
  public paginateData(data){
    console.log(data.length)
    this.totalPages.next(Math.ceil(data.length/this.rowsPerPage))
    if(this.currentPage>Math.ceil(data.length/this.rowsPerPage)){
      this.currentPage=Math.ceil(data.length/this.rowsPerPage)
    }
    this.start = (this.currentPage - 1) * this.rowsPerPage;
    this.end = this.currentPage * this.rowsPerPage;
    return data.slice(this.start, Math.min(data.length, this.end));
  }
  constructor() {
    this.currentPage=1;
    this.rowsPerPage=2;
    this.start=0;
    this.end=0;
    // this.totalPages(1);
   }


}
