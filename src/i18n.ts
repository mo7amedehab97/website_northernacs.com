export type Lang = 'en' | 'ar';

import ar from './locales/ar.json';
import en from './locales/en.json';

export const LANG_STORAGE_KEY = 'northernacs-lang';
export const isLang = (value: string | null): value is Lang => value === 'en' || value === 'ar';

export const translations = {
  en,
  ar,
} as const;
