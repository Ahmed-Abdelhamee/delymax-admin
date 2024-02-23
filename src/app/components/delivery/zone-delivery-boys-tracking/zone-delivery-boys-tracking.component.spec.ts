import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDeliveryBoysTrackingComponent } from './zone-delivery-boys-tracking.component';

describe('ZoneDeliveryBoysTrackingComponent', () => {
  let component: ZoneDeliveryBoysTrackingComponent;
  let fixture: ComponentFixture<ZoneDeliveryBoysTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDeliveryBoysTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDeliveryBoysTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
