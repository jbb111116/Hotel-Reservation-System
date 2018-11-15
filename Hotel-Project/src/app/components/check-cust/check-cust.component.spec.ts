import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCustComponent } from './check-cust.component';

describe('CheckCustComponent', () => {
  let component: CheckCustComponent;
  let fixture: ComponentFixture<CheckCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
