import * as data from './translations';

export type Language = typeof data.supportedLanguages[number];
export type TextsByLanguage = Record<Language, string>;
export type Label = keyof typeof data.translations;
export type TranslationsMap = Record<Label, TextsByLanguage>;

export const fallbackLanguage: Language = data.fallbackLanguage;
export const supportedLanguages: readonly Language[] = data.supportedLanguages;
export const translations: TranslationsMap = data.translations;
