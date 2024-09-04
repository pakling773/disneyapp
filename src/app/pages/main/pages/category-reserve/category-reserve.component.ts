import { SharedModule } from '@/modules/shared.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperDirectiveModule } from '../../../../@directives/swiper.directive.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { SwiperOptions } from 'swiper/types';
import { IMovie } from '../../../../interface/movie.interface';
import {
  actionAdventure,
  animationVideo,
  chronicleCollection,
  trendingmoive,
} from '../../../../constants/movies_constants';
import {
  continueWatching,
  topVideo,
} from '../../../../constants/home_constants';

@Component({
  selector: 'app-category-reserve',
  templateUrl: './category-reserve.component.html',
  styleUrls: ['./category-reserve.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperDirectiveModule, SharedModule],
})
export class CategoryReserveComponent {
  trendingmoives: IMovie[] = trendingmoive;
  continueWatchings: IMovie[] = continueWatching;
  topVideos: IMovie[] = topVideo;
  actionAdventures: IMovie[] = actionAdventure;
  chronicleCollections: IMovie[] = chronicleCollection;
  animationVideos: IMovie[] = animationVideo;
}
