import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryBoysComponent } from './list-delivery-boys.component';

describe('ListDeliveryBoysComponent', () => {
  let component: ListDeliveryBoysComponent;
  let fixture: ComponentFixture<ListDeliveryBoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeliveryBoysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeliveryBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
