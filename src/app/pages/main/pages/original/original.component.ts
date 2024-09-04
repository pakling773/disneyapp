import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirectiveModule } from '../../../../@directives/swiper.directive.module';
import { CommonMoviesSliderComponent } from '@/components/common-movies-slider/common-movies-slider.component';
import { SharedModule } from '@/modules/shared.module';
import { SwiperOptions } from 'swiper/types';
import { IMovieHeroCaurosel } from '../../../../interface/movie-hero-caurosel.interface';
import { orginalHeroCaurosel } from '../../../../constants/movie-hero-caurosel';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperDirectiveModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OriginalComponent {
  orginalHeroCaurosel: IMovieHeroCaurosel[] = orginalHeroCaurosel;
  public readonly swiperOptions: SwiperOptions = {
    loop: false,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
}
