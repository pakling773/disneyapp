import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
  OverlayPositionBuilder,
  FlexibleConnectedPositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MovieInfoCardComponent } from '../movie-info-card/movie-info-card.component';
import { IMovie } from 'src/app/interface/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input() movie: IMovie;
  @Input() continueWatching: boolean = false;

  private hoverTimeoutId: any = null;
  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
      const parentEl = this.el.nativeElement.parentElement;
      if (parentEl.classList.contains('active-slide')) {
        this.startHoverTimer();
      }
    });

    this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
      this.cancelHoverTimer();
    });
  }

  ngOnDestroy(): void {
    this.cancelHoverTimer();
    this.closeOverlay();
  }

  private startHoverTimer(): void {
    // Clear any existing timeout
    this.cancelHoverTimer();

    // Start a new timeout for 2 seconds
    this.hoverTimeoutId = setTimeout(() => {
      this.createOverlay();
    }, 500);
  }

  private cancelHoverTimer(): void {
    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId);
      this.hoverTimeoutId = null;
    }
  }

  private createOverlay(): void {
    // Ensure previous overlay is closed
    this.closeOverlay();

    const positionStrategy: FlexibleConnectedPositionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.el.nativeElement)
      .withPositions([
        {
          originX: 'center',
          originY: 'center',
          overlayX: 'center',
          overlayY: 'center',
        },
        {
          originX: 'start',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
        },
      ])
      .withScrollableContainers([this.el.nativeElement]);

    this.overlayRef = this.overlay.create({
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const overlayPortal = new ComponentPortal(MovieInfoCardComponent);
    const overlayComponentRef = this.overlayRef.attach(overlayPortal);

    // Pass data to the overlay component
    overlayComponentRef.instance.movie = this.movie;
    overlayComponentRef.instance.onLeave = () => this.closeOverlay();
  }

  private closeOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
