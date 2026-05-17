export type ThemeMode = 'light' | 'dark' | 'system';

export const themeConfig = {
  defaultMode: 'light' as ThemeMode,
  darkClass: 'my-app-dark',
  storageKey: 'ipms_theme',
} as const;
