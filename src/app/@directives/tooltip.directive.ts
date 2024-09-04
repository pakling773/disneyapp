import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
declare var bootstrap: any;

@Directive({
  selector: '[bTooltip]',
})
export class TooltipDirective implements AfterViewInit, OnDestroy {
  private tooltip: any;
  private routeSubscription: Subscription;

  @Input() placement: string = 'top';
  @Input() appTooltip: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngAfterViewInit() {
    try {
      this.initializeTooltip();
      // Subscribe to route changes
      this.routeSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log('called');
          this.disposeTooltip();
        }
      });
    } catch (error) {
      console.error('Tooltip initialization failed:', error);
    }
  }

  ngOnDestroy(): void {
    try {
      //   this.disposeTooltip();

      // Unsubscribe from route changes
      if (this.routeSubscription) {
        this.routeSubscription.unsubscribe();
      }
    } catch (error) {
      console.error('Tooltip disposal failed:', error);
    }
  }

  private initializeTooltip() {
    const domElement: HTMLElement = this.el.nativeElement;

    if (!domElement) {
      console.error('Element not found for tooltip initialization.');
      return;
    }

    if (!this.appTooltip) {
      console.warn('Tooltip text is undefined or empty.');
      return;
    }

    this.tooltip = new bootstrap.Tooltip(domElement, {
      placement: this.placement || 'top',
      title: this.appTooltip || '',
    });

    if (!this.tooltip) {
      console.error('Tooltip creation failed.');
    }
  }

  private disposeTooltip() {
    if (this.tooltip) {
      try {
        // Check if the tooltip instance has a dispose method
        if (typeof this.tooltip.dispose === 'function') {
          this.tooltip.dispose();
        } else {
          console.warn('Tooltip instance does not have a dispose method.');
        }
      } catch (error) {
        console.error('Error during tooltip disposal:', error);
      } finally {
        this.tooltip = null; // Ensure tooltip reference is cleared
      }
    } else {
      console.warn('Tooltip instance is already null or undefined.');
    }
  }
}
