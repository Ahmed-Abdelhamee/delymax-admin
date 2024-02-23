import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWearhouseComponent } from './view-wearhouse.component';

describe('ViewWearhouseComponent', () => {
  let component: ViewWearhouseComponent;
  let fixture: ComponentFixture<ViewWearhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWearhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWearhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
