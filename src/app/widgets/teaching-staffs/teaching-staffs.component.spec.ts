import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingStaffsComponent } from './teaching-staffs.component';

describe('TeachingStaffsComponent', () => {
  let component: TeachingStaffsComponent;
  let fixture: ComponentFixture<TeachingStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
