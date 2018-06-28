import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartaSuccessComponent } from './darta-success.component';

describe('DartaSuccessComponent', () => {
  let component: DartaSuccessComponent;
  let fixture: ComponentFixture<DartaSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartaSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartaSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
