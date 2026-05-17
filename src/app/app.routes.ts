import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { AppLayoutComponent } from './core/layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { DealerLayoutComponent } from './core/layouts/dealer-layout/dealer-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/public/public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin', 'super-admin'] },
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'dealer',
    component: DealerLayoutComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['dealer'] },
    loadChildren: () => import('./features/dealer/dealer.routes').then((m) => m.dealerRoutes),
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    loadChildren: () => import('./features/app/app.routes').then((m) => m.applicationRoutes),
  },
  {
    path: 'unauthorized',
    title: 'Unauthorized',
    loadComponent: () =>
      import('./features/shared-pages/unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent,
      ),
  },
  {
    path: 'maintenance',
    title: 'Maintenance',
    loadComponent: () =>
      import('./features/shared-pages/maintenance/maintenance.component').then(
        (m) => m.MaintenanceComponent,
      ),
  },
  {
    path: 'not-found',
    title: 'Not Found',
    loadComponent: () =>
      import('./features/shared-pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
