// All supported languages
export const LANGUAGES = ['en', 'sv'] as const;

// Language to use if no supported language is found in navigator.languages
export const FALLBACK_LANGUAGE = 'en';

// All translations
export const TRANSLATIONS = {
  WELCOME: {
    en: 'Welcome!',
    sv: 'Välkommen!',
  },
  WELCOME2: {
    en: 'Welcome!',
    sv: 'Välkommen!',
  },
} as const;
