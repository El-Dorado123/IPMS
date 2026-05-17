import { Injectable, signal } from '@angular/core';

import { storageKeys } from '../../constants/storage.constant';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLanguage = signal(localStorage.getItem(storageKeys.language) ?? 'en');

  language() {
    return this.currentLanguage();
  }

  setLanguage(language: string) {
    this.currentLanguage.set(language);
    localStorage.setItem(storageKeys.language, language);
  }
}
