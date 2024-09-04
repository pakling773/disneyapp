import {
  Component,
  HostBinding,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { IMovie } from 'src/app/interface/movie.interface';
declare var bootstrap: any;

@Component({
  selector: 'app-movie-info-card',
  templateUrl: './movie-info-card.component.html',
  styleUrls: ['./movie-info-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }), // Start with scale down
        animate(
          '150ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1)' }) // Zoom in and fade in
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in-out',
          style({ opacity: 0, transform: 'scale(0.8)' }) // Zoom out and fade out
        ),
      ]),
    ]),
  ],
})
export class MovieInfoCardComponent implements AfterViewInit, OnDestroy {
  @Input() onLeave: () => void;
  @Input() movie: IMovie;

  @HostBinding('@fadeInOut') fadeInOut = true;

  // Track if the mouse is inside the card
  private isInside = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add global event listeners to detect clicks and touches outside the movie card
    this.renderer.listen('document', 'click', (event: MouseEvent) =>
      this.onDocumentClick(event)
    );
    this.renderer.listen('document', 'touchend', (event: TouchEvent) =>
      this.onDocumentClick(event)
    );
  }

  ngOnDestroy(): void {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isInside = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isInside = false;
    this.checkAndLeave();
  }

  private onDocumentClick(event: MouseEvent | TouchEvent): void {
    if (!this.isInside && !this.el.nativeElement.contains(event.target)) {
      this.handleLeave();
    }
  }

  private checkAndLeave(): void {
    if (!this.isInside) {
      this.handleLeave();
    }
  }

  private handleLeave(): void {
    if (this.onLeave) {
      this.onLeave(); // Call the parent's onLeave method
    }
  }
}
