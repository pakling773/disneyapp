import { Component } from '@angular/core';
import { IMovie } from '../../../../interface/movie.interface';
import {
  actionAdventure,
  animationVideo,
  chronicleCollection,
  disneyOrginal,
  trendingmoive,
} from '../../../../constants/movies_constants';
import { IMovieHeroCaurosel } from '../../../../interface/movie-hero-caurosel.interface';
import {
  moviesHeroCaurosel,
  orginalHeroCaurosel,
} from '../../../../constants/movie-hero-caurosel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  trendingmoives: IMovie[] = trendingmoive;
  disneyorginals: IMovie[] = disneyOrginal;
  actionAdventures: IMovie[] = actionAdventure;
  animationVideos: IMovie[] = animationVideo;
  chronicleCollections: IMovie[] = chronicleCollection;
  moviesHeroCaurosel: IMovieHeroCaurosel[] = moviesHeroCaurosel;
}
