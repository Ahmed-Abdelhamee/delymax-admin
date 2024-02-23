import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTempComponent } from './import-temp.component';

describe('ImportTempComponent', () => {
  let component: ImportTempComponent;
  let fixture: ComponentFixture<ImportTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
