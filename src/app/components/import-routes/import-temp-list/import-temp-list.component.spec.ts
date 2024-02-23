import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTempListComponent } from './import-temp-list.component';

describe('ImportTempListComponent', () => {
  let component: ImportTempListComponent;
  let fixture: ComponentFixture<ImportTempListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTempListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTempListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
