import { Injectable } from '@angular/core';

import { menuConfig } from '../../config/menu.config';

@Injectable({ providedIn: 'root' })
export class MenuService {
  items() {
    return menuConfig;
  }
}
