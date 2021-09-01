import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRowComponent } from './navbar-row.component';

describe('NavbarRowComponent', () => {
  let component: NavbarRowComponent;
  let fixture: ComponentFixture<NavbarRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
