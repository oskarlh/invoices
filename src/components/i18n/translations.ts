// All supported languages
export const supportedLanguages = ['en', 'sv'] as const;

// Language to use if no supported language is found in navigator.languages
export const fallbackLanguage = 'en';

// All translations
export const translations = {
  'invoicing/app name': {
    en: 'Invoicing 1.0',
    sv: 'Fakturering 1.0',
  },
  'invoicing/create invoice': {
    en: 'Create Invoice',
    sv: 'Skapa faktura',
  },
  'invoicing/invoices': {
    en: 'Invoices',
    sv: 'Fakturor',
  },
  'invoicing/page not found': {
    en: 'Page not found',
    sv: 'Sidan kunde inte hittas',
  },
  logo: {
    en: 'Logo',
    sv: 'Logga',
  },
} as const;
