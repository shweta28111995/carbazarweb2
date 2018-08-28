import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyregisteremailComponent } from './verifyregisteremail.component';

describe('VerifyregisteremailComponent', () => {
  let component: VerifyregisteremailComponent;
  let fixture: ComponentFixture<VerifyregisteremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyregisteremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyregisteremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
