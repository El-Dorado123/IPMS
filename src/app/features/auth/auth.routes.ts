import { Routes } from '@angular/router';

import { PagePlaceholderComponent } from '../shared-pages/page-placeholder/page-placeholder.component';

export const authRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', title: 'Login', component: PagePlaceholderComponent },
  { path: 'forgot-password', title: 'Forgot Password', component: PagePlaceholderComponent },
  { path: 'reset-password', title: 'Reset Password', component: PagePlaceholderComponent },
  { path: 'verify-otp', title: 'Verify OTP', component: PagePlaceholderComponent },
];
