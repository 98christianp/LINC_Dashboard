import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMessagePopupComponent } from './confirm-message-popup.component';

describe('ConfirmMessagePopupComponent', () => {
  let component: ConfirmMessagePopupComponent;
  let fixture: ComponentFixture<ConfirmMessagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMessagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMessagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
