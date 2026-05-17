import { Routes } from '@angular/router';

import { PagePlaceholderComponent } from '../shared-pages/page-placeholder/page-placeholder.component';

export const dealerRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', title: 'Dealer Dashboard', component: PagePlaceholderComponent },
  { path: 'customers', title: 'Customers', component: PagePlaceholderComponent },
  { path: 'wallet', title: 'Wallet', component: PagePlaceholderComponent },
  { path: 'commission', title: 'Commission', component: PagePlaceholderComponent },
  { path: 'subscriptions', title: 'Subscriptions', component: PagePlaceholderComponent },
  { path: 'branding', title: 'Branding', component: PagePlaceholderComponent },
  { path: 'reports', title: 'Reports', component: PagePlaceholderComponent },
  { path: 'support', title: 'Support', component: PagePlaceholderComponent },
  { path: '**', title: 'Dealer', component: PagePlaceholderComponent },
];
