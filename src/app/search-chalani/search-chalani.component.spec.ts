import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChalaniComponent } from './search-chalani.component';

describe('SearchChalaniComponent', () => {
  let component: SearchChalaniComponent;
  let fixture: ComponentFixture<SearchChalaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchChalaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchChalaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
