import { Routes } from '@angular/router';

import { PagePlaceholderComponent } from '../shared-pages/page-placeholder/page-placeholder.component';

export const publicRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app/dashboard' },
  { path: 'pricing', title: 'Pricing', component: PagePlaceholderComponent },
  { path: 'about', title: 'About', component: PagePlaceholderComponent },
  { path: 'contact', title: 'Contact', component: PagePlaceholderComponent },
  { path: 'pg-search', title: 'PG Search', component: PagePlaceholderComponent },
  { path: 'property-details', title: 'Property Details', component: PagePlaceholderComponent },
];
