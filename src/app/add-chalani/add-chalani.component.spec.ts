import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChalaniComponent } from './add-chalani.component';

describe('AddChalaniComponent', () => {
  let component: AddChalaniComponent;
  let fixture: ComponentFixture<AddChalaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChalaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChalaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
