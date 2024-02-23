import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOrdersComponent } from './zone-orders.component';

describe('ZoneOrdersComponent', () => {
  let component: ZoneOrdersComponent;
  let fixture: ComponentFixture<ZoneOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
