import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverRouteComponent } from './view-driver-route.component';

describe('ViewDriverRouteComponent', () => {
  let component: ViewDriverRouteComponent;
  let fixture: ComponentFixture<ViewDriverRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDriverRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriverRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
