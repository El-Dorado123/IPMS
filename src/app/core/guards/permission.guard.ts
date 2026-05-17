import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Permission } from '../constants/permissions.constant';
import { PermissionService } from '../services/permission/permission.service';

export const permissionGuard: CanActivateFn = (route) => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);
  const requiredPermissions = (route.data['permissions'] ?? []) as Permission[];

  return permissionService.hasAll(requiredPermissions) || router.createUrlTree(['/unauthorized']);
};
