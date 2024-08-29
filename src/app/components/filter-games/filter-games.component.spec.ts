import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGamesComponent } from './filter-games.component';

describe('FilterGamesComponent', () => {
  let component: FilterGamesComponent;
  let fixture: ComponentFixture<FilterGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
