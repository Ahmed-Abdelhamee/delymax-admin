import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSlidersComponent } from './en-sliders.component';

describe('EnSlidersComponent', () => {
  let component: EnSlidersComponent;
  let fixture: ComponentFixture<EnSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
