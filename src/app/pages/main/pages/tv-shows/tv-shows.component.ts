import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperDirectiveModule } from '../../../../@directives/swiper.directive.module';
import { SwiperOptions } from 'swiper/types';
import { SharedModule } from '@/modules/shared.module';
import { IMovie } from '../../../../interface/movie.interface';
import {
  adventure,
  card,
  childishHeaven,
  disneyOriginal,
  seasonTrend,
  seriesDocumentary,
} from '../../../../constants/tv-shows';
import { IMovieHeroCaurosel } from '../../../../interface/movie-hero-caurosel.interface';
import { tvshowsHeroCaurosel } from '../../../../constants/movie-hero-caurosel';
import { CategoriesComponent } from '@/components/categories/categories.component';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SwiperDirectiveModule,
    SharedModule,
    CategoriesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TvShowsComponent {
  seasonTrends: IMovie[] = seasonTrend;
  disneyOriginals: IMovie[] = disneyOriginal;
  adventures: IMovie[] = adventure;
  cards: IMovie[] = card;
  seriesDocumentarys: IMovie[] = seriesDocumentary;
  childishHeavens: IMovie[] = childishHeaven;
  tvshowsHeroCaurosel: IMovieHeroCaurosel[] = tvshowsHeroCaurosel;
}
