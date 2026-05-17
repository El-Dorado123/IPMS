import { NgClass, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DrawerModule } from 'primeng/drawer';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { filter } from 'rxjs';

import { MenuItemConfig, profileMenuConfig } from '../../../config/menu.config';
import { storageKeys } from '../../../constants/storage.constant';
import { AuthService } from '../../../services/auth/auth.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-topbar',
  imports: [
    MenubarModule,
    NgClass,
    DrawerModule,
    UpperCasePipe,
    ButtonModule,
    AvatarModule,
    DividerModule,
    RippleModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  readonly menuItems = input.required<MenuItemConfig[]>();
  readonly themeService = inject(ThemeService);
  private readonly authService = inject(AuthService);
  private readonly cdRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  readonly themeIcon = computed(() => (this.themeService.isDark() ? 'pi-sun' : 'pi-moon'));

  items: MenuItem[] = [];
  showProfile = false;
  currentYear = new Date().getFullYear();
  loading = signal(false);
  profileDetails = signal({
    name: 'IPMS Admin',
    company_name: 'IPMS',
    address: '',
    billing_address: '',
    plan_name: 'Property Management',
    email_id: '',
    mobile_no: '',
    profile_url: '',
  });

  readonly profileMenuItems = profileMenuConfig.filter((item) => item.label !== 'Logout');

  constructor() {
    effect(() => {
      this.buildMenu(this.menuItems());
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        // this.buildMenu(this.menuItems());
        // this.cdRef.detectChanges();
      });
  }

  ngOnInit() {
    this.fetchProfileDetails();
  }

  buildMenu(menuItems: MenuItemConfig[]) {
    this.items = [
      ...menuItems.map((item) => this.toPrimeMenuItem(item)),
      {
        separator: true,
        styleClass: 'mobile-only',
      },
      {
        label: 'Notifications',
        icon: 'pi pi-bell',
        styleClass: 'mobile-only',
        routerLink: '/app/notifications',
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        styleClass: 'mobile-only',
        routerLink: '/app/settings/profile',
      },
    ];
  }

  fetchProfileDetails() {
    this.loading.set(false);
  }

  goToNotifications() {
    this.router.navigate(['/app/notifications']);
  }

  showProfileDrawer() {
    this.showProfile = true;
  }

  goToProfile() {
    this.router.navigate(['/app/settings/profile']);
    this.showProfile = false;
  }

  goToHome() {
    this.router.navigate(['/app/dashboard']);
  }

  goToReleaseNotes() {
    this.router.navigate(['/app/settings']);
  }

  goToLanguage() {
    this.router.navigate(['/app/settings/language']);
  }

  goToThemeSettings() {
    this.router.navigate(['/app/settings/themes']);
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  signOut() {
    this.authService.setAccessToken(null);
    localStorage.removeItem(storageKeys.refreshToken);
    localStorage.removeItem(storageKeys.user);
    localStorage.removeItem(storageKeys.tenant);
    this.showProfile = false;
    this.router.navigate(['/auth/login']);
  }

  onProfileMenuClick(item: MenuItemConfig) {
    if (item.label === 'Change Password') {
      this.openChangePassword();
      return;
    }

    this.router.navigate([item.route]);
    this.showProfile = false;
  }

  openChangePassword() {
    this.showProfile = false;
  }

  private toPrimeMenuItem(item: MenuItemConfig): MenuItem {
    return {
      label: item.label,
      icon: item.icon,
      routerLink: item.route,
      routerLinkActiveOptions: { exact: true },
      styleClass: item.children?.length && this.isRouteActive(item.route) ? 'parent-menu-active' : '',
      items: item.children?.map((child) => ({
        label: child.label,
        icon: child.icon,
        routerLink: child.route,
        routerLinkActiveOptions: { exact: true },
      })),
    };
  }

  private isRouteActive(baseRoute: string): boolean {
    const currentUrl = this.router.url.split('?')[0].split('#')[0];
    return currentUrl === baseRoute || currentUrl.startsWith(baseRoute + '/');
  }
}
