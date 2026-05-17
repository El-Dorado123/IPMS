import { Pipe, PipeTransform } from '@angular/core';

import { formatCurrency } from '../../core/utils/currency.util';

@Pipe({
  name: 'appCurrency',
  standalone: true,
})
export class AppCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined, currency = 'INR', locale = 'en-IN') {
    return formatCurrency(value ?? 0, currency, locale);
  }
}
