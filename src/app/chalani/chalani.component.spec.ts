import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalaniComponent } from './chalani.component';

describe('ChalaniComponent', () => {
  let component: ChalaniComponent;
  let fixture: ComponentFixture<ChalaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
