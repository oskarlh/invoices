import { fallbackLanguage, supportedLanguages, Language } from './definitions';

export default function findPreferredLanguage(): Language {
  for (const languagePreference of navigator.languages) {
    for (const language of supportedLanguages) {
      if (languagePreference.startsWith(language)) {
        return language;
      }
    }
  }
  return fallbackLanguage;
}
