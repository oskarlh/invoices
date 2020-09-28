import { useCallback } from 'react';
import useCurrentLanguage from './useCurrentLanguage';
import { translations, Label } from './definitions';

export default function useTranslation(): (label: Label) => string {
  const language = useCurrentLanguage();
  return useCallback(
    (label: Label): string => {
      return translations[label][language];
    },
    [language]
  );
}
