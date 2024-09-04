import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/main/pages/home/home.component';
import { MoviesComponent } from './pages/main/pages/movies/movies.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/main',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/main/pages/video-player/video-player.component').then(
        (c) => c.VideoPlayerComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
