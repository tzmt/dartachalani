import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartaComponent } from './darta.component';

describe('DartaComponent', () => {
  let component: DartaComponent;
  let fixture: ComponentFixture<DartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
