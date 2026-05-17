import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-placeholder',
  template: `
    <section class="placeholder-page">
      <h1>{{ pageTitle() }}</h1>
      <p>This page is ready for implementation.</p>
    </section>
  `,
  styles: `
    .placeholder-page {
      display: grid;
      gap: 8px;
      padding: 24px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #ffffff;
    }

    h1 {
      margin: 0;
      color: #111827;
      font-size: 24px;
    }

    p {
      margin: 0;
      color: #6b7280;
    }
  `,
})
export class PagePlaceholderComponent {
  private readonly route = inject(ActivatedRoute);

  readonly pageTitle = computed(() => {
    const routeTitle = this.route.snapshot.routeConfig?.title;
    const dataTitle = this.route.snapshot.data['pageTitle'];

    return typeof routeTitle === 'string' ? routeTitle : (dataTitle ?? 'Page');
  });
}
