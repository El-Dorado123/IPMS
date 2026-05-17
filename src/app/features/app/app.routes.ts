import { Routes } from '@angular/router';

import { PagePlaceholderComponent } from '../shared-pages/page-placeholder/page-placeholder.component';

export const applicationRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', title: 'Dashboard', component: PagePlaceholderComponent },
  { path: 'property', title: 'Property', component: PagePlaceholderComponent },
  { path: 'rooms', title: 'Rooms', component: PagePlaceholderComponent },
  { path: 'tenants', title: 'Tenants', component: PagePlaceholderComponent },
  { path: 'billing', title: 'Billing', component: PagePlaceholderComponent },
  { path: 'reports', title: 'Reports', component: PagePlaceholderComponent },
  { path: 'administration', title: 'Administration', component: PagePlaceholderComponent },
  { path: 'visitors', title: 'Visitors & Leads', component: PagePlaceholderComponent },
  { path: 'scanner', title: 'Scanner', component: PagePlaceholderComponent },
  { path: 'notifications', title: 'Notifications', component: PagePlaceholderComponent },
  { path: 'support', title: 'Support', component: PagePlaceholderComponent },
  { path: 'settings', title: 'Settings', component: PagePlaceholderComponent },
  { path: '**', title: 'Page', component: PagePlaceholderComponent },
];
