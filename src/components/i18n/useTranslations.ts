import { useCallback, useContext } from 'react';
import I18nContext from './I18nContext';
import { translations, Label } from './definitions';

export default function useTranslations(): (label: Label) => string {
  const language = useContext(I18nContext);
  return useCallback(
    (label: Label): string => {
      return translations[label][language];
    },
    [language]
  );
}
