import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  template: `
    <main class="page-state">
      <h1>Maintenance</h1>
      <p>The application is temporarily unavailable.</p>
    </main>
  `,
  styles: `
    .page-state {
      display: grid;
      min-height: 100vh;
      place-content: center;
      gap: 12px;
      padding: 24px;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 32px;
    }
  `,
})
export class MaintenanceComponent {}
