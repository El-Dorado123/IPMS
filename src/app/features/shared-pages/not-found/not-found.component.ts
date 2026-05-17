import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <main class="page-state">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/">Go home</a>
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
export class NotFoundComponent {}
