import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./pages/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: 'movie-detail',
        loadComponent: () =>
          import('./pages/movie-detail/movie-detail.component').then(
            (c) => c.MovieDetailComponent
          ),
      },
      {
        path: 'original',
        loadComponent: () =>
          import('./pages/original/original.component').then(
            (c) => c.OriginalComponent
          ),
      },
      {
        path: 'tv-shows',
        loadComponent: () =>
          import('./pages/tv-shows/tv-shows.component').then(
            (c) => c.TvShowsComponent
          ),
      },

      {
        path: 'tv-show',
        loadComponent: () =>
          import('./pages/tv-show/tv-show.component').then(
            (c) => c.TvShowComponent
          ),
      },

      {
        path: 'category-reserve',
        loadComponent: () =>
          import('./pages/category-reserve/category-reserve.component').then(
            (c) => c.CategoryReserveComponent
          ),
      },

      {
        path: 'edit-users-profile',
        loadComponent: () =>
          import(
            './pages/edit-users-profile/edit-users-profile.component'
          ).then((c) => c.EditUsersProfileComponent),
      },

      {
        path: 'account-subscription',
        loadComponent: () =>
          import(
            './pages/account-subscription/account-subscription.component'
          ).then((c) => c.AccountSubscriptionComponent),
      },
      {
        path: 'search-result',
        data: { search: '' },
        loadComponent: () =>
          import('./pages/search-resut/search-resut.component').then(
            (c) => c.SearchResutComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
