import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private readonly requests = signal(0);

  readonly loading = () => this.requests() > 0;

  show() {
    this.requests.update((count) => count + 1);
  }

  hide() {
    this.requests.update((count) => Math.max(0, count - 1));
  }
}
