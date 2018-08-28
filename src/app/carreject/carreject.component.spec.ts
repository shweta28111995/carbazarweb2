import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrejectComponent } from './carreject.component';

describe('CarrejectComponent', () => {
  let component: CarrejectComponent;
  let fixture: ComponentFixture<CarrejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
