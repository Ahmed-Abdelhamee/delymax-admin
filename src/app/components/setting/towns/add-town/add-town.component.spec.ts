import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTownComponent } from './add-town.component';

describe('AddTownComponent', () => {
  let component: AddTownComponent;
  let fixture: ComponentFixture<AddTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
