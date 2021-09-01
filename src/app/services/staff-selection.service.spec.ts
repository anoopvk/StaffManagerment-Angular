import { TestBed } from '@angular/core/testing';

import { StaffSelectionService } from './staff-selection.service';

describe('StaffSelectionService', () => {
  let service: StaffSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
