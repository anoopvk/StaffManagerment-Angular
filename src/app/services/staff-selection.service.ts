import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffSelectionService {

  public selectedStaffs = new Set()
  constructor() { }

  toggleSelected(id?: number) {
    if (this.selectedStaffs.has(id)) {
      this.selectedStaffs.delete(id);
    }
    else {
      this.selectedStaffs.add(id);
    }
    console.log(this.selectedStaffs)
  }
}
