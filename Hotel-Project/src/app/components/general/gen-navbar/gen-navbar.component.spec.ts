import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenNavbarComponent } from './gen-navbar.component';

describe('GenNavbarComponent', () => {
  let component: GenNavbarComponent;
  let fixture: ComponentFixture<GenNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
