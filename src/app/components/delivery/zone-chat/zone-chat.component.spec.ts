import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneChatComponent } from './zone-chat.component';

describe('ZoneChatComponent', () => {
  let component: ZoneChatComponent;
  let fixture: ComponentFixture<ZoneChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
