import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeStaffsComponent } from './administrative-staffs.component';

describe('AdministrativeStaffsComponent', () => {
  let component: AdministrativeStaffsComponent;
  let fixture: ComponentFixture<AdministrativeStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
