import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBookingFormComponent } from './plot-booking-form.component';

describe('PlotBookingFormComponent', () => {
  let component: PlotBookingFormComponent;
  let fixture: ComponentFixture<PlotBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotBookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
