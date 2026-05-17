export const roles = ['super-admin', 'admin', 'dealer', 'manager', 'staff'] as const;

export type Role = (typeof roles)[number];
