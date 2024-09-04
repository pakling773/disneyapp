import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '@/modules/shared.module';
import { SwiperDirectiveModule } from '../../../../@directives/swiper.directive.module';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from '@/components/categories/categories.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    RouterModule,
    CategoriesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoviesModule {}
