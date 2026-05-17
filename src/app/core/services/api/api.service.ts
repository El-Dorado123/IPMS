import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { apiConfig } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(endpoint: string, params?: Record<string, string | number | boolean>) {
    return this.http.get<T>(this.url(endpoint), { params: this.params(params) });
  }

  post<T>(endpoint: string, body: unknown) {
    return this.http.post<T>(this.url(endpoint), body);
  }

  put<T>(endpoint: string, body: unknown) {
    return this.http.put<T>(this.url(endpoint), body);
  }

  patch<T>(endpoint: string, body: unknown) {
    return this.http.patch<T>(this.url(endpoint), body);
  }

  delete<T>(endpoint: string) {
    return this.http.delete<T>(this.url(endpoint));
  }

  private url(endpoint: string) {
    return `${apiConfig.baseUrl}/${endpoint.replace(/^\/+/, '')}`;
  }

  private params(params?: Record<string, string | number | boolean>) {
    return new HttpParams({ fromObject: params ?? {} });
  }
}
