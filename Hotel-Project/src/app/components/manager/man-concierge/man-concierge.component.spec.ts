import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManConciergeComponent } from './man-concierge.component';

describe('ManConciergeComponent', () => {
  let component: ManConciergeComponent;
  let fixture: ComponentFixture<ManConciergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManConciergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
