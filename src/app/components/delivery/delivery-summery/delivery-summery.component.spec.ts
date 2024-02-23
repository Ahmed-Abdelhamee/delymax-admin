import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySummeryComponent } from './delivery-summery.component';

describe('DeliverySummeryComponent', () => {
  let component: DeliverySummeryComponent;
  let fixture: ComponentFixture<DeliverySummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverySummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
