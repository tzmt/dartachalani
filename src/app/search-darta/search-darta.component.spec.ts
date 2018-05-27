import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDartaComponent } from './search-darta.component';

describe('SearchDartaComponent', () => {
  let component: SearchDartaComponent;
  let fixture: ComponentFixture<SearchDartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
