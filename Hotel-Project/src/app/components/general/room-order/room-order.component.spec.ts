import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOrderComponent } from './room-order.component';

describe('RoomOrderComponent', () => {
  let component: RoomOrderComponent;
  let fixture: ComponentFixture<RoomOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
