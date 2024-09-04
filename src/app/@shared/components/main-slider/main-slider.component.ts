import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { homeHeroCaurosel } from 'src/app/constants/movie-hero-caurosel';

import { IMovieHeroCaurosel } from 'src/app/interface/movie-hero-caurosel.interface';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
  @Input() movieHeroCaurosel?: IMovieHeroCaurosel[] = homeHeroCaurosel;
  @Input() title: string = 'Hello world';

  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public swiperParams: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
    pagination: true,
    navigation: {
      nextEl: '.hero-swiper-btn-prev',
      prevEl: '.hero-swiper-btn-next',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
