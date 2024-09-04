import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TopHeaderComponent } from '@/components/top-header/top-header.component';
import { MainSliderComponent } from '@/components/main-slider/main-slider.component';
import { CommonMoviesSliderComponent } from '@/components/common-movies-slider/common-movies-slider.component';
import { DisneyOriginalsComponent } from '@/components/disney-originals/disney-originals.component';
import { RouterModule } from '@angular/router';
import { SwiperDirectiveModule } from 'src/app/@directives/swiper.directive.module';
import { MovieCardComponent } from '@/components/movie-card/movie-card.component';
import { MovieInfoCardComponent } from '@/components/movie-info-card/movie-info-card.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProfileDropdownComponent } from '@/components/profile-dropdown/profile-dropdown.component';
import { TooltipDirectiveModule } from 'src/app/@directives/tooltip.directive.module';

// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SwiperDirectiveModule,
    PortalModule,
    OverlayModule,
    FormsModule,
    TooltipDirectiveModule,
  ],
  // providers: [provideAnimations()],
  declarations: [
    TopHeaderComponent,
    MainSliderComponent,
    CommonMoviesSliderComponent,
    DisneyOriginalsComponent,
    MovieCardComponent,
    MovieInfoCardComponent,
    ProfileDropdownComponent,
    // CustomerComponent,
    // NewItemDirective,
    //  OrdersPipe
  ],
  exports: [
    TopHeaderComponent,
    MainSliderComponent,
    CommonMoviesSliderComponent,
    DisneyOriginalsComponent,
    // CustomerComponent,
    // NewItemDirective,
    // OrdersPipe,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
