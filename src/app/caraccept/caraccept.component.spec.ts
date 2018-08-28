import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracceptComponent } from './caraccept.component';

describe('CaracceptComponent', () => {
  let component: CaracceptComponent;
  let fixture: ComponentFixture<CaracceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
