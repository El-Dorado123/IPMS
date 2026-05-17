import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopbarComponent } from '../components/topbar/topbar.component';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-shell-layout',
  imports: [RouterOutlet, TopbarComponent],
  template: `
    <div class="app-shell">
      <app-topbar [menuItems]="menuItems()" />
      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .app-shell {
      min-height: 100vh;
      background: #f9fafb;
      color: #111827;
    }

    .content {
      min-width: 0;
      padding: 20px;
    }
  `,
})
export class AppLayoutComponent {
  private readonly menuService = inject(MenuService);

  readonly menuItems = computed(() => this.menuService.items());
}
