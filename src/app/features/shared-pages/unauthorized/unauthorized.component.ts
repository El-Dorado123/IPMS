import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  imports: [RouterLink],
  template: `
    <main class="page-state">
      <h1>Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <a routerLink="/app/dashboard">Back to dashboard</a>
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
export class UnauthorizedComponent {}
