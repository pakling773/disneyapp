import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../../../interface/movie.interface';
import {
  continueWatching,
  recommended,
  topVideo,
} from '../../../../constants/home_constants';

import { IMovieHeroCaurosel } from '../../../../interface/movie-hero-caurosel.interface';
import { homeHeroCaurosel } from '../../../../constants/movie-hero-caurosel';
import { disneyOrginal } from '../../../../constants/movies_constants';
import { adventure } from 'src/app/constants/tv-shows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recommendeds: IMovie[] = recommended;
  movies: IMovie[] = continueWatching;
  topVideos: IMovie[] = topVideo;
  homeHeroCaurosel: IMovieHeroCaurosel[] = homeHeroCaurosel;
  disneyOrginals: IMovieHeroCaurosel[] = disneyOrginal;
  playlist = adventure;

  ngOnInit(): void {}
}
