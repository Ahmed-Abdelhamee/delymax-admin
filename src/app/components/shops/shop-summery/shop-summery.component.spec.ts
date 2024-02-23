import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSummeryComponent } from './shop-summery.component';

describe('ShopSummeryComponent', () => {
  let component: ShopSummeryComponent;
  let fixture: ComponentFixture<ShopSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
