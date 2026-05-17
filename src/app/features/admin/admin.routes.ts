import { Routes } from '@angular/router';

import { PagePlaceholderComponent } from '../shared-pages/page-placeholder/page-placeholder.component';

export const adminRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', title: 'Admin Dashboard', component: PagePlaceholderComponent },
  { path: 'dealers', title: 'Dealers', component: PagePlaceholderComponent },
  { path: 'subscriptions', title: 'Subscriptions', component: PagePlaceholderComponent },
  { path: 'revenue', title: 'Revenue', component: PagePlaceholderComponent },
  { path: 'users', title: 'Users', component: PagePlaceholderComponent },
  { path: 'plans', title: 'Plans', component: PagePlaceholderComponent },
  { path: 'reports', title: 'Reports', component: PagePlaceholderComponent },
  { path: 'audit-logs', title: 'Audit Logs', component: PagePlaceholderComponent },
  { path: 'settings', title: 'Settings', component: PagePlaceholderComponent },
  { path: '**', title: 'Admin', component: PagePlaceholderComponent },
];
