import * as data from './translations';

export type Language = typeof data.LANGUAGES[number];
export type TextsByLanguage = Record<Language, string>;
export type Label = keyof typeof data.TRANSLATIONS;
export type TranslationsMap = Record<Label, TextsByLanguage>;

export const FALLBACK_LANGUAGE = data.FALLBACK_LANGUAGE as Language;
export const LANGUAGES: readonly Language[] = data.LANGUAGES;
export const TRANSLATIONS: TranslationsMap = data.TRANSLATIONS;

