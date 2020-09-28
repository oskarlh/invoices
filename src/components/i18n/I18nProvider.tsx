import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import I18nContext from './I18nContext';
import { Language } from './definitions';
import findPreferredLanguage from './findPreferredLanguage';

export interface Props {
  children: ReactNode;
  language?: Language;
}

export default function I18nProvider({
  children,
  language: forcedLanguage,
}: Props): ReactElement {
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
    <I18nContext.Provider value={forcedLanguage || language}>
      {children}
    </I18nContext.Provider>
  );
}
