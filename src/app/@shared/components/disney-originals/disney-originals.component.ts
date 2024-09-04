import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IMovie } from 'src/app/interface/movie.interface';
import { applyActiveClass } from 'src/app/utils/swiper_helper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-disney-originals',
  templateUrl: './disney-originals.component.html',
  styleUrls: ['./disney-originals.component.scss'],
})
export class DisneyOriginalsComponent {
  @Input() movies?: IMovie[];
  @Input() title: string = 'Hello world';

  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;

  public swiperParams: SwiperOptions = {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.movie-swiper-pagination',
      clickable: true,
    },
    speed: 500,
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
}
