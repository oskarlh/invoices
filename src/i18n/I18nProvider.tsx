import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import I18nContext from './I18nContext';
import { FALLBACK_LANGUAGE, LANGUAGES, Language } from './definitions';

function findPreferredLanguage(): Language {
  for (const languagePreference of navigator.languages) {
    for (const language of LANGUAGES) {
      if (languagePreference.startsWith(language)) {
        return language;
      }
    }
  }
  return FALLBACK_LANGUAGE;
}

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({
  children,
}: I18nProviderProps): ReactElement {
  const [language, setLanguage] = useState(() => findPreferredLanguage());

  // Change language if the user changes language preferences in their browser settings
  useEffect(() => {
    const onLanguageChange = () => {
      setLanguage(findPreferredLanguage());
    };
    globalThis.addEventListener('languagechange', onLanguageChange);
    return () =>
      globalThis.removeEventListener('languagechange', onLanguageChange);
  }, []);

  return (
    <I18nContext.Provider value={language}>{children}</I18nContext.Provider>
  );
}
