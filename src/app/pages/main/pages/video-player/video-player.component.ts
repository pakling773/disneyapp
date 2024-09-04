import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideoPlayerComponent {
  public player: Plyr;
  public showHeader: boolean = false;
  private eventHandlers: (() => void)[] = [];
  private controlsVisible: boolean = false;

  @ViewChild('header', { static: true }) headerElement: ElementRef;

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit() {
    this.player = new Plyr('#plyrID');

    this.ngZone.runOutsideAngular(() => {
      const controlsshownHandler = () => {
        this.ngZone.run(() => {
          this.controlsVisible = true;
          this.showHeader = true;
        });
      };

      const controlshiddenHandler = () => {
        this.ngZone.run(() => {
          this.controlsVisible = false;
          this.updateHeaderVisibility();
        });
      };

      this.player.on('controlsshown', controlsshownHandler);
      this.player.on('controlshidden', controlshiddenHandler);

      this.eventHandlers.push(() =>
        this.player.off('controlsshown', controlsshownHandler)
      );
      this.eventHandlers.push(() =>
        this.player.off('controlshidden', controlshiddenHandler)
      );

      this.player;

      // Manually listen for hover events on the header and controls
      const headerElement = this.headerElement.nativeElement;

      headerElement.addEventListener(
        'mouseenter',
        this.onHeaderMouseEnter.bind(this)
      );
      headerElement.addEventListener(
        'mouseleave',
        this.onHeaderMouseLeave.bind(this)
      );

      const controlsElement = document.querySelector('.plyr__controls');
      if (controlsElement) {
        controlsElement.addEventListener(
          'mouseenter',
          this.onControlsMouseEnter.bind(this)
        );
        controlsElement.addEventListener(
          'mouseleave',
          this.onControlsMouseLeave.bind(this)
        );
      }
    });
  }

  ngOnDestroy() {
    // Cleanup event listeners
    const headerElement = this.headerElement.nativeElement;
    headerElement.removeEventListener(
      'mouseenter',
      this.onHeaderMouseEnter.bind(this)
    );
    headerElement.removeEventListener(
      'mouseleave',
      this.onHeaderMouseLeave.bind(this)
    );

    const controlsElement = document.querySelector('.plyr__controls');
    if (controlsElement) {
      controlsElement.removeEventListener(
        'mouseenter',
        this.onControlsMouseEnter.bind(this)
      );
      controlsElement.removeEventListener(
        'mouseleave',
        this.onControlsMouseLeave.bind(this)
      );
    }

    // Clean up Plyr instance
    if (this.player) {
      this.player.destroy();
    }
  }

  back() {
    this.router.navigateByUrl('/');
  }

  private onHeaderMouseEnter() {
    this.ngZone.run(() => {
      this.showHeader = true;
      this.player.toggleControls(true);
    });
  }

  private onHeaderMouseLeave() {
    this.ngZone.run(() => {
      if (!this.controlsVisible) {
        this.updateHeaderVisibility();
      }
    });
  }

  private onControlsMouseEnter() {
    this.ngZone.run(() => {
      this.showHeader = true;
    });
  }

  private onControlsMouseLeave() {
    this.ngZone.run(() => {
      this.updateHeaderVisibility();
    });
  }

  private updateHeaderVisibility() {
    // Only hide the header if neither the controls nor the header are hovered over
    if (
      !this.controlsVisible &&
      !this.isHoveringHeader() &&
      !this.isHoveringControls()
    ) {
      this.showHeader = false;
    }
  }

  private isHoveringHeader(): boolean {
    return this.headerElement.nativeElement.matches(':hover');
  }

  private isHoveringControls(): boolean {
    const controlsElement = document.querySelector('.plyr__controls');
    return controlsElement ? controlsElement.matches(':hover') : false;
  }
}
