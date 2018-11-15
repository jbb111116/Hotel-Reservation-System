import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReservationsComponent } from './process-reservations.component';

describe('ProcessReservationsComponent', () => {
  let component: ProcessReservationsComponent;
  let fixture: ComponentFixture<ProcessReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
