// All supported languages
export const supportedLanguages = ['en', 'sv'] as const;

// Language to use if no supported language is found in navigator.languages
export const fallbackLanguage = 'en';

// All translations
export const translations = {
  WELCOME: {
    en: 'Welcome!',
    sv: 'Välkommen!',
  },
  WELCOME2: {
    en: 'Welcome!',
    sv: 'Välkommen!',
  },
} as const;
