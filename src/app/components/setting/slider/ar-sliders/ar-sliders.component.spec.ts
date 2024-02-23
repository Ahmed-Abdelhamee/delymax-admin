import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArSlidersComponent } from './ar-sliders.component';

describe('ArSlidersComponent', () => {
  let component: ArSlidersComponent;
  let fixture: ComponentFixture<ArSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
