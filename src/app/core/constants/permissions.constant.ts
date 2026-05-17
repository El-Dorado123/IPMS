export const permissions = [
  'property:view',
  'property:manage',
  'room:view',
  'room:manage',
  'tenant:view',
  'tenant:manage',
  'billing:view',
  'billing:manage',
  'reports:view',
  'admin:manage',
] as const;

export type Permission = (typeof permissions)[number];
