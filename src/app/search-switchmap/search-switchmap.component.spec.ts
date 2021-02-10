import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSwitchmapComponent } from './search-switchmap.component';

describe('SearchSwitchmapComponent', () => {
  let component: SearchSwitchmapComponent;
  let fixture: ComponentFixture<SearchSwitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSwitchmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
