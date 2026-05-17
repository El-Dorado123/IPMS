import { signal } from '@angular/core';

import { ThemeMode, themeConfig } from '../config/theme.config';

export const themeState = {
  mode: signal<ThemeMode>(themeConfig.defaultMode),
};
