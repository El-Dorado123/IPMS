import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TenantService {
  private readonly activeTenantId = signal<string | null>(null);

  tenantId() {
    return this.activeTenantId();
  }

  setTenantId(tenantId: string | null) {
    this.activeTenantId.set(tenantId);
  }
}
