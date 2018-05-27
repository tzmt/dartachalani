import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDartaComponent } from './add-darta.component';

describe('AddDartaComponent', () => {
  let component: AddDartaComponent;
  let fixture: ComponentFixture<AddDartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
