import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManNavbarComponent } from './man-navbar.component';

describe('ManNavbarComponent', () => {
  let component: ManNavbarComponent;
  let fixture: ComponentFixture<ManNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
