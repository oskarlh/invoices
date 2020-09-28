import { createContext } from 'react';
import { fallbackLanguage } from './definitions';

const I18nContext = createContext(fallbackLanguage);
I18nContext.displayName = 'I18nContext';
export default I18nContext;
