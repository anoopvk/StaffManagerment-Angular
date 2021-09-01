import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTextBottomComponent } from './content-text-bottom.component';

describe('ContentTextBottomComponent', () => {
  let component: ContentTextBottomComponent;
  let fixture: ComponentFixture<ContentTextBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTextBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTextBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
