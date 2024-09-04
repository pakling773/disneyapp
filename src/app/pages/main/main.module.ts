import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/modules/shared.module';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { TopHeaderComponent } from '@/components/top-header/top-header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [CommonModule, SharedModule, MainRoutingModule],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
