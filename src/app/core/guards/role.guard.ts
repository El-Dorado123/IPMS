import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Role } from '../constants/roles.constant';
import { AuthService } from '../services/auth/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = (route.data['roles'] ?? []) as Role[];

  return authService.hasAnyRole(allowedRoles) || router.createUrlTree(['/unauthorized']);
};
