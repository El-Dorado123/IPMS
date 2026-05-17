import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';

import { Permission } from '../../core/constants/permissions.constant';
import { PermissionService } from '../../core/services/permission/permission.service';

@Directive({
  selector: '[appPermission]',
  standalone: true,
})
export class PermissionDirective {
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly permissionService = inject(PermissionService);

  readonly appPermission = input<Permission | Permission[]>();

  constructor() {
    effect(() => {
      const permissions = this.appPermission();
      const requiredPermissions = Array.isArray(permissions)
        ? permissions
        : permissions
          ? [permissions]
          : [];
      const allowed = this.permissionService.hasAll(requiredPermissions);

      this.viewContainerRef.clear();

      if (allowed) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }
}
