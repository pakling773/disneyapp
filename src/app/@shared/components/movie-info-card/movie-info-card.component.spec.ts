import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoCardComponent } from './movie-info-card.component';

describe('MovieInfoCardComponent', () => {
  let component: MovieInfoCardComponent;
  let fixture: ComponentFixture<MovieInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieInfoCardComponent]
    });
    fixture = TestBed.createComponent(MovieInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
