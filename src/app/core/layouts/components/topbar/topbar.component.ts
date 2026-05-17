import { Component, computed, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuItemConfig, profileMenuConfig, quickActionsConfig } from '../../../config/menu.config';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  readonly menuItems = input.required<MenuItemConfig[]>();
  readonly primaryMenuItems = computed(() => this.menuItems().slice(0, 6));
  readonly moreMenuItems = computed(() => this.menuItems().slice(6));
  readonly quickActions = quickActionsConfig;
  readonly profileMenu = profileMenuConfig;
  readonly openMenuId = signal<string | null>(null);

  openMenu(menuId: string) {
    this.openMenuId.set(menuId);
  }

  toggleMenu(menuId: string) {
    this.openMenuId.update((currentMenuId) => (currentMenuId === menuId ? null : menuId));
  }

  closeMenus() {
    this.openMenuId.set(null);
  }

  isMenuOpen(menuId: string) {
    return this.openMenuId() === menuId;
  }
}
