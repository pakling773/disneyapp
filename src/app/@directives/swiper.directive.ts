import {
  afterNextRender,
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
})
export class SwiperDirective implements AfterViewInit, OnDestroy {
  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<any>, private zone: NgZone) {}

  ngOnInit(): void {
    if (this.el?.nativeElement.swiper) {
      this.el.nativeElement.swiper.destroy();
      this.el.nativeElement.initialize();
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      if (this.el.nativeElement) {
        Object.assign(this.el.nativeElement, this.config);
        this.el.nativeElement.swiper?.destroy();
        this.el.nativeElement.initialize();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.el.nativeElement.swiper) {
      this.el.nativeElement.swiper.destroy();
    }
  }
}
