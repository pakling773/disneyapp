import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { continueWatching } from 'src/app/constants/home_constants';
import { IMovie } from 'src/app/interface/movie.interface';
import { applyActiveClass } from 'src/app/utils/swiper_helper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-common-movies-slider',
  templateUrl: './common-movies-slider.component.html',
  styleUrls: ['./common-movies-slider.component.scss'],
})
export class CommonMoviesSliderComponent implements OnInit {
  @Input() movies?: IMovie[] = continueWatching;
  @Input() title: string = 'Hello world';
  @Input() continueWatching: boolean = false;
  @Input() isTopMovies: boolean = false;
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;

  public swiperParams: SwiperOptions = {
    loop: false,
    spaceBetween: 20,
    pagination: true,
    speed: 500,
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        // slidesPerGroup: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        // slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        // slidesPerGroup: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        // slidesPerGroup: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        // slidesPerGroup: 5,
        spaceBetween: 20,
      },
    },
    on: {
      init: (swiper) => applyActiveClass(swiper),
      slideChange: (swiper) => applyActiveClass(swiper),
      transitionEnd: (swiper) => applyActiveClass(swiper),
    },
  };
  ngOnInit(): void {
    if (this.isTopMovies == false) {
      this.movies = this.movies
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }
  }
}
