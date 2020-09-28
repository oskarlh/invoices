import { Label as I18nLabel } from './definitions';
import { TranslationProps as I18nTranslationProps } from './withTranslation';

export type Label = I18nLabel;
export type TranslationProps = I18nTranslationProps;

export { default as I18nProvider } from './I18nProvider';
export { supportedLanguages } from './definitions';
export { default as useTranslation } from './useTranslation';
export { default as withTranslation } from './withTranslation';
