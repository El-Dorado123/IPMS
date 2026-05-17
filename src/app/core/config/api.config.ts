import { environment } from '../../../environments/environment';

export const apiConfig = {
  baseUrl: environment.apiBaseUrl,
  timeout: 30000,
} as const;
