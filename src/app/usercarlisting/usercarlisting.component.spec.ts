import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercarlistingComponent } from './usercarlisting.component';

describe('UsercarlistingComponent', () => {
  let component: UsercarlistingComponent;
  let fixture: ComponentFixture<UsercarlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercarlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercarlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
