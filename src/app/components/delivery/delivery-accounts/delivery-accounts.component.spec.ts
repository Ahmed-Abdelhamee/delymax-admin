import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAccountsComponent } from './delivery-accounts.component';

describe('DeliveryAccountsComponent', () => {
  let component: DeliveryAccountsComponent;
  let fixture: ComponentFixture<DeliveryAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
