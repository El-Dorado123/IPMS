import { Injectable, signal } from '@angular/core';

import { themeConfig, ThemeMode } from '../../config/theme.config';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly mode = signal<ThemeMode>(
    (localStorage.getItem(themeConfig.storageKey) as ThemeMode | null) ?? themeConfig.defaultMode,
  );

  constructor() {
    this.applyThemeClass(this.mode());
  }

  themeMode() {
    return this.mode();
  }

  isDark() {
    const mode = this.mode();
    return mode === 'dark' || (mode === 'system' && this.prefersDark());
  }

  toggle() {
    this.setThemeMode(this.isDark() ? 'light' : 'dark');
  }

  setThemeMode(mode: ThemeMode) {
    this.mode.set(mode);
    localStorage.setItem(themeConfig.storageKey, mode);
    this.applyThemeClass(mode);
  }

  private applyThemeClass(mode: ThemeMode) {
    document.documentElement.classList.toggle(
      themeConfig.darkClass,
      mode === 'dark' || (mode === 'system' && this.prefersDark()),
    );
  }

  private prefersDark() {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
