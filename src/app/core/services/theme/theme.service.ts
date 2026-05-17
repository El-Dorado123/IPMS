import { Injectable, signal } from '@angular/core';

import { themeConfig, ThemeMode } from '../../config/theme.config';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly mode = signal<ThemeMode>(
    (localStorage.getItem(themeConfig.storageKey) as ThemeMode | null) ?? themeConfig.defaultMode,
  );

  themeMode() {
    return this.mode();
  }

  setThemeMode(mode: ThemeMode) {
    this.mode.set(mode);
    localStorage.setItem(themeConfig.storageKey, mode);
    document.documentElement.classList.toggle(themeConfig.darkClass, mode === 'dark');
  }
}
