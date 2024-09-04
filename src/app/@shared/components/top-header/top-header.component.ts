import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { SearchService } from 'src/app/services/search.service';

type NavIcons = {
  home: string;
  movies: string;
  tvShows: string;
  original: string;
};

type NavItem = {
  title: string;
  url: string;
  icon?: string;
  activeIcon?: string;
};
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  isUserMenuVisible: boolean = false;
  visibleLogoutModal: boolean = false;

  focusInput: boolean = false;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  @ViewChild('avatarLg', { static: true }) avatarLg!: ElementRef;
  @ViewChild('avatar', { static: true }) avatar!: ElementRef;

  searchValue: string;
  private overlayRef: OverlayRef | null = null;

  toggleUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }

  public readonly navIcons: NavIcons = {
    home: 'M10.0001 19.0007V14.0007H14.0001V19.0007C14.0001 19.5507 14.4501 20.0007 15.0001 20.0007H18.0001C18.5501 20.0007 19.0001 19.5507 19.0001 19.0007V12.0007H20.7001C21.1601 12.0007 21.3801 11.4307 21.0301 11.1307L12.6701 3.6007C12.2901 3.2607 11.7101 3.2607 11.3301 3.6007L2.9701 11.1307C2.6301 11.4307 2.8401 12.0007 3.3001 12.0007H5.0001V19.0007C5.0001 19.5507 5.4501 20.0007 6.0001 20.0007H9.0001C9.5501 20.0007 10.0001 19.5507 10.0001 19.0007Z',
    movies:
      'M16.4733 13.38C16.6602 13.1968 16.809 12.9784 16.911 12.7374C17.0129 12.4964 17.0661 12.2376 17.0674 11.9759C17.0688 11.7142 17.0182 11.4548 16.9187 11.2128C16.8191 10.9707 16.6726 10.7508 16.4875 10.5658C16.3025 10.3807 16.0826 10.2342 15.8406 10.1347C15.5985 10.0351 15.3392 9.98456 15.0775 9.98588C14.8158 9.98721 14.5569 10.0404 14.3159 10.1424C14.0749 10.2443 13.8565 10.3931 13.6733 10.58C13.3082 10.9526 13.1049 11.4542 13.1075 11.9759C13.1101 12.4975 13.3185 12.9971 13.6874 13.3659C14.0563 13.7348 14.5558 13.9432 15.0775 13.9458C15.5991 13.9485 16.1008 13.7451 16.4733 13.38ZM8.29867 13.38C8.48558 13.1968 8.63432 12.9784 8.7363 12.7374C8.83827 12.4964 8.89146 12.2376 8.89278 11.9759C8.8941 11.7142 8.84353 11.4548 8.744 11.2128C8.64446 10.9707 8.49793 10.7508 8.31288 10.5658C8.12783 10.3807 7.90793 10.2342 7.6659 10.1347C7.42387 10.0351 7.16451 9.98456 6.90281 9.98588C6.64111 9.98721 6.38227 10.0404 6.14126 10.1424C5.90024 10.2443 5.68184 10.3931 5.49867 10.58C5.13354 10.9526 4.9302 11.4542 4.93283 11.9759C4.93547 12.4975 5.14386 12.9971 5.51274 13.3659C5.88161 13.7348 6.38115 13.9432 6.90281 13.9458C7.42447 13.9485 7.92609 13.7451 8.29867 13.38ZM12.414 6.50667C12.231 6.31924 12.0127 6.16998 11.7716 6.06756C11.5306 5.96513 11.2716 5.91157 11.0097 5.90997C10.7478 5.90837 10.4881 5.95878 10.2458 6.05826C10.0035 6.15774 9.7834 6.30432 9.59817 6.4895C9.41294 6.67468 9.26631 6.89479 9.16677 7.13706C9.06723 7.37933 9.01677 7.63895 9.0183 7.90086C9.01984 8.16278 9.07334 8.42179 9.17571 8.66287C9.27808 8.90396 9.42728 9.12233 9.61467 9.30533C9.9873 9.66925 10.4884 9.87162 11.0092 9.86857C11.53 9.86551 12.0287 9.65729 12.397 9.28903C12.7654 8.92078 12.9737 8.42218 12.9769 7.90133C12.9801 7.38049 12.7778 6.87939 12.414 6.50667ZM12.414 14.6813C12.231 14.4939 12.0127 14.3447 11.7716 14.2422C11.5306 14.1398 11.2716 14.0862 11.0097 14.0846C10.7478 14.083 10.4881 14.1334 10.2458 14.2329C10.0035 14.3324 9.7834 14.479 9.59817 14.6642C9.41294 14.8494 9.26631 15.0695 9.16677 15.3117C9.06723 15.554 9.01677 15.8136 9.0183 16.0755C9.01984 16.3374 9.07334 16.5965 9.17571 16.8375C9.27808 17.0786 9.42728 17.297 9.61467 17.48C9.9873 17.8439 10.4884 18.0463 11.0092 18.0432C11.53 18.0402 12.0287 17.832 12.397 17.4637C12.7654 17.0954 12.9737 16.5968 12.9769 16.076C12.9801 15.5552 12.7778 15.0541 12.414 14.6813ZM11.3847 11.5953C11.3323 11.5429 11.2702 11.5014 11.2017 11.473C11.1333 11.4446 11.06 11.43 10.9859 11.43C10.9118 11.4299 10.8385 11.4445 10.77 11.4728C10.7016 11.5011 10.6394 11.5426 10.587 11.595C10.5346 11.6474 10.493 11.7095 10.4647 11.7779C10.4363 11.8464 10.4217 11.9197 10.4216 11.9938C10.4216 12.0678 10.4362 12.1412 10.4645 12.2096C10.4928 12.2781 10.5343 12.3403 10.5867 12.3927C10.6924 12.4985 10.8358 12.558 10.9854 12.558C11.135 12.5581 11.2785 12.4987 11.3843 12.393C11.4902 12.2873 11.5496 12.1438 11.5497 11.9942C11.5498 11.8446 11.4904 11.7012 11.3847 11.5953ZM23.4247 11.166C21.2047 15.7747 17.9813 17.7847 15.668 18.6593C13.9547 19.3067 12.4933 19.4447 11.702 19.4647C11.47 19.486 11.2367 19.5 11.0007 19.5C6.858 19.5 3.5 16.142 3.5 12C3.5 7.858 6.858 4.5 11 4.5C15.1427 4.5 18.5 7.858 18.5 12C18.502 13.7118 17.9151 15.3722 16.838 16.7027C18.726 15.628 20.734 13.7813 22.2633 10.6073C22.3429 10.4628 22.4749 10.3542 22.632 10.3039C22.7892 10.2537 22.9597 10.2655 23.1084 10.337C23.2571 10.4086 23.3728 10.5344 23.4316 10.6885C23.4904 10.8427 23.4879 11.0136 23.4247 11.166Z',
    tvShows:
      'M12.56 7.97662H17.0413C17.7486 7.97662 18.4269 8.25758 18.927 8.75767C19.427 9.25777 19.708 9.93605 19.708 10.6433V17.3333C19.708 18.0405 19.427 18.7188 18.927 19.2189C18.4269 19.719 17.7486 20 17.0413 20H6.91667C6.20942 20 5.53115 19.719 5.03105 19.2189C4.53095 18.7188 4.25 18.0405 4.25 17.3333V10.6433C4.25 9.93605 4.53095 9.25777 5.03105 8.75767C5.53115 8.25758 6.20942 7.97662 6.91667 7.97662H11.0573L8.40333 5.32262C8.33137 5.2507 8.27428 5.16531 8.23531 5.07133C8.19635 4.97734 8.17628 4.8766 8.17625 4.77486C8.17622 4.67312 8.19622 4.57236 8.23513 4.47836C8.27404 4.38435 8.33108 4.29892 8.403 4.22696C8.47492 4.15499 8.56031 4.0979 8.6543 4.05893C8.74828 4.01997 8.84902 3.9999 8.95076 3.99987C9.05251 3.99984 9.15326 4.01985 9.24727 4.05875C9.34128 4.09766 9.4267 4.1547 9.49867 4.22662L11.8087 6.53662L14.118 4.22662C14.2633 4.08128 14.4605 3.99963 14.666 3.99963C14.8715 3.99963 15.0687 4.08128 15.214 4.22662C15.3593 4.37196 15.441 4.56908 15.441 4.77462C15.441 4.98016 15.3593 5.17728 15.214 5.32262L12.5593 7.97662H12.56ZM16.8453 13.13C17.1491 13.13 17.4404 13.0093 17.6552 12.7945C17.87 12.5797 17.9907 12.2884 17.9907 11.9846C17.9907 11.6809 17.87 11.3895 17.6552 11.1748C17.4404 10.96 17.1491 10.8393 16.8453 10.8393C16.5416 10.8393 16.2503 10.96 16.0355 11.1748C15.8207 11.3895 15.7 11.6809 15.7 11.9846C15.7 12.2884 15.8207 12.5797 16.0355 12.7945C16.2503 13.0093 16.5416 13.13 16.8453 13.13ZM16.8453 17.1373C16.998 17.141 17.1499 17.1141 17.292 17.0582C17.4342 17.0023 17.5637 16.9186 17.673 16.8119C17.7823 16.7052 17.8692 16.5777 17.9285 16.437C17.9878 16.2962 18.0183 16.145 18.0183 15.9923C18.0183 15.8396 17.9878 15.6884 17.9285 15.5476C17.8692 15.4069 17.7823 15.2794 17.673 15.1727C17.5637 15.066 17.4342 14.9823 17.292 14.9264C17.1499 14.8705 16.998 14.8436 16.8453 14.8473C16.5464 14.8545 16.2622 14.9783 16.0534 15.1922C15.8445 15.4062 15.7276 15.6933 15.7276 15.9923C15.7276 16.2913 15.8445 16.5784 16.0534 16.7923C16.2622 17.0063 16.5464 17.1301 16.8453 17.1373Z',
    original:
      'M11.75 17.352L6.96 20L7.87533 14.392L4 10.4207L9.35533 9.602L11.75 4.5L14.1447 9.602L19.5 10.4207L15.6247 14.392L16.54 20L11.75 17.352Z',
  };

  navItems: NavItem[] = [
    {
      title: '首頁',
      url: '/home',
      icon: this.navIcons.home,
    },
    {
      title: '電影',
      url: '/movies',
      icon: this.navIcons.movies,
    },
    {
      title: '影集',
      url: '/tv-shows',
      icon: this.navIcons.tvShows,
    },
    {
      title: '原創',
      url: '/original',
      icon: this.navIcons.original,
    },
  ];

  private isOpenProfileDropdown: boolean = false;

  constructor(
    public router: Router,
    private overlay: Overlay,
    private searchService: SearchService
  ) {}

  isActive(navItem: NavItem): boolean {
    return this.router.url === navItem.url;
  }
  getMenuIcon(icon: string) {
    return ``;
  }

  focusOnInput() {
    this.focusInput = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 0);
  }

  onDocumentClick(event: Event) {
    this.focusInput = false;
  }

  goToSearchResult() {
    if (this.searchValue) {
      this.searchService.setSearchValue(this.searchValue);
      this.router.navigate(['/search-result'], {
        queryParams: { search: this.searchValue },
      });
    }
  }

  openProfileDropdown(type: 'avatar' | 'avatarLg') {
    if (this.isOpenProfileDropdown) {
      this.closeOverlay();
      return;
    }
    if (type == 'avatar') {
      this.createOverlay(this.avatar);
    } else {
      this.createOverlay(this.avatarLg);
    }
  }

  private createOverlay(el: ElementRef): void {
    // Ensure previous overlay is closed
    this.closeOverlay();

    const positionStrategy: FlexibleConnectedPositionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(el.nativeElement)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ])
      .withScrollableContainers([el.nativeElement]);

    this.overlayRef = this.overlay.create({
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const overlayPortal = new ComponentPortal(ProfileDropdownComponent);
    const overlayComponentRef = this.overlayRef.attach(overlayPortal);

    this.isOpenProfileDropdown = true;

    overlayComponentRef.instance.isVisible = this.isOpenProfileDropdown;
    overlayComponentRef.instance.parentElRef = el;

    // Pass data to the overlay component
    overlayComponentRef.instance.onLeave = () => this.closeOverlay();
  }

  private closeOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
      this.isOpenProfileDropdown = false;
    }
  }

  ngOnDestroy(): void {
    this.closeOverlay();
  }
}
