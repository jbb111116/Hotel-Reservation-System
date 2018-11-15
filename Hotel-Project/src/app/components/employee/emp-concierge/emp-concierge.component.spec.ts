import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpConciergeComponent } from './emp-concierge.component';

describe('EmpConciergeComponent', () => {
  let component: EmpConciergeComponent;
  let fixture: ComponentFixture<EmpConciergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpConciergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
