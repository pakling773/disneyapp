import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMoviesSliderComponent } from './common-movies-slider.component';

describe('CommonMoviesSliderComponent', () => {
  let component: CommonMoviesSliderComponent;
  let fixture: ComponentFixture<CommonMoviesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonMoviesSliderComponent]
    });
    fixture = TestBed.createComponent(CommonMoviesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
