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
  'invoicing/choose currency': {
    en: 'Choose currency:',
    sv: 'Välj valuta:',
  },
  'invoicing/create invoice': {
    en: 'Create invoice',
    sv: 'Skapa faktura',
  },
  'invoicing/due date': {
    en: 'Due date',
    sv: 'Förfallodatum',
  },
  'invoicing/email invoice': {
    en: 'Send email',
    sv: 'Skicka e-postmeddelande',
  },
  'invoicing/email sent to': {
    en: 'Invoice sent to ',
    sv: 'Faktura skickad till ',
  },
  'invoicing/email to': {
    en: 'Email to',
    sv: 'E-posta till',
  },
  'invoicing/invoices': {
    en: 'Invoices',
    sv: 'Fakturor',
  },
  'invoicing/item description': {
    en: 'Description',
    sv: 'Beskrivning',
  },
  'invoicing/page not found': {
    en: 'Page not found',
    sv: 'Sidan kunde inte hittas',
  },
  'invoicing/paid': {
    en: 'Paid',
    sv: 'Betald',
  },
  'invoicing/price per item': {
    en: 'Unit price',
    sv: 'Á-pris',
  },
  'invoicing/save changes': {
    en: 'Save changes',
    sv: 'Spara ändringar',
  },
  'invoicing/title': {
    en: 'Title',
    sv: 'Titel',
  },
  'invoicing/total': {
    en: 'Total',
    sv: 'Att betala',
  },
  loading: {
    en: 'Loading...',
    sv: 'Laddar...',
  },
  logo: {
    en: 'Logo',
    sv: 'Logga',
  },
  no: {
    en: 'No',
    sv: 'Nej',
  },
  quantity: {
    en: 'Quantity',
    sv: 'Antal',
  },
  'saving changes': {
    en: 'Saving changes...',
    sv: 'Sparar ändringar...',
  },
  yes: {
    en: 'Yes',
    sv: 'Ja',
  },
} as const;
