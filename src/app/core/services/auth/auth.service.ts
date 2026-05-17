import { Injectable, signal } from '@angular/core';

import { Role } from '../../constants/roles.constant';
import { storageKeys } from '../../constants/storage.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly token = signal<string | null>(localStorage.getItem(storageKeys.accessToken));
  private readonly roles = signal<Role[]>([]);

  accessToken() {
    return this.token();
  }

  isAuthenticated() {
    return Boolean(this.token());
  }

  setAccessToken(token: string | null) {
    this.token.set(token);

    if (token) {
      localStorage.setItem(storageKeys.accessToken, token);
      return;
    }

    localStorage.removeItem(storageKeys.accessToken);
  }

  setRoles(roles: Role[]) {
    this.roles.set(roles);
  }

  hasAnyRole(allowedRoles: Role[]) {
    return allowedRoles.length === 0 || allowedRoles.some((role) => this.roles().includes(role));
  }
}
