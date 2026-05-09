import { en } from './en.js';
import { es } from './es.js';

const translations = { en, es };

export function useTranslation(lang = 'en') {
  return translations[lang] ?? translations.en;
}
