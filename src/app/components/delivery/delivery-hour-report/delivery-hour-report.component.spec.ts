import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryHourReportComponent } from './delivery-hour-report.component';

describe('DeliveryHourReportComponent', () => {
  let component: DeliveryHourReportComponent;
  let fixture: ComponentFixture<DeliveryHourReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryHourReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryHourReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
