import { Permission } from '../constants/permissions.constant';

export function hasPermission(permissions: Permission[], permission: Permission) {
  return permissions.includes(permission);
}

export function hasAllPermissions(permissions: Permission[], requiredPermissions: Permission[]) {
  return requiredPermissions.every((permission) => hasPermission(permissions, permission));
}
