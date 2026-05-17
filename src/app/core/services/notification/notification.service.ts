import { Injectable, signal } from '@angular/core';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface AppNotification {
  message: string;
  type: NotificationType;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  readonly latest = signal<AppNotification | null>(null);

  success(message: string) {
    this.notify(message, 'success');
  }

  info(message: string) {
    this.notify(message, 'info');
  }

  warning(message: string) {
    this.notify(message, 'warning');
  }

  error(message: string) {
    this.notify(message, 'error');
  }

  private notify(message: string, type: NotificationType) {
    this.latest.set({ message, type });
  }
}
