// All supported languages
export const supportedLanguages = ['en', 'sv'] as const;

// Language to use if no supported language is found in navigator.languages
export const fallbackLanguage = 'en';

// All translations
export const translations = {
  'invoicing/app name': {
    en: 'Invoicing App 1.0',
    sv: 'Faktureringsapp 1.0',
  },
  'invoicing/create invoice': {
    en: 'Create invoice',
    sv: 'Skapa faktura',
  },
  'invoicing/due date': {
    en: 'Due date',
    sv: 'Förfallodatum',
  },
  'invoicing/invoices': {
    en: 'Invoices',
    sv: 'Fakturor',
  },
  'invoicing/page not found': {
    en: 'Page not found',
    sv: 'Sidan kunde inte hittas',
  },
  'invoicing/total': {
    en: 'Total',
    sv: 'Att betala',
  },
  logo: {
    en: 'Logo',
    sv: 'Logga',
  },
} as const;
