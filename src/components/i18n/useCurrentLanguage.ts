import { useContext } from 'react';
import I18nContext from './I18nContext';
import { Language } from './definitions';

export default function useCurrentLanguage(): Language {
  return useContext(I18nContext);
}
