import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportStaffsComponent } from './support-staffs.component';

describe('SupportStaffsComponent', () => {
  let component: SupportStaffsComponent;
  let fixture: ComponentFixture<SupportStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
