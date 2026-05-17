import { signal } from '@angular/core';

export const appState = {
  pageTitle: signal('IPMS'),
  sidebarCollapsed: signal(false),
};
