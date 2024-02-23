import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneHoursComponent } from './zone-hours.component';

describe('ZoneHoursComponent', () => {
  let component: ZoneHoursComponent;
  let fixture: ComponentFixture<ZoneHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
