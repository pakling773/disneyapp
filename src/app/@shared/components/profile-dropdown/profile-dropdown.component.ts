import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
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
export class ProfileDropdownComponent {
  @Input() onLeave: () => void;
  @Input() isVisible: boolean = false;
  @Input() parentElRef: ElementRef;
  @HostBinding('@fadeInOut') fadeInOut = true;

  constructor(private el: ElementRef, private route: Router) {}

  ngAfterViewInit(): void {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (
      this.isVisible &&
      !this.el.nativeElement.contains(event.target) &&
      !this.parentElRef?.nativeElement.contains(event.target)
    ) {
      this.handleLeave();
    }
  }

  navigate(path: string) {
    this.route.navigateByUrl(path);
    this.handleLeave();
  }

  private handleLeave(): void {
    if (this.onLeave) {
      this.onLeave();
    }
  }
}
