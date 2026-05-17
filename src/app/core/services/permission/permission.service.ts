import { Injectable, signal } from '@angular/core';

import { Permission } from '../../constants/permissions.constant';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private readonly permissions = signal<Permission[]>([]);

  setPermissions(permissions: Permission[]) {
    this.permissions.set(permissions);
  }

  has(permission: Permission) {
    return this.permissions().includes(permission);
  }

  hasAll(requiredPermissions: Permission[]) {
    return (
      requiredPermissions.length === 0 ||
      requiredPermissions.every((permission) => this.has(permission))
    );
  }
}
