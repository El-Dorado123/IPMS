import { signal } from '@angular/core';

import { Role } from '../constants/roles.constant';

export const authState = {
  userId: signal<string | null>(null),
  roles: signal<Role[]>([]),
};
