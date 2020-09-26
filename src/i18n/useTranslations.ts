import { useCallback, useContext } from 'react';
import I18nContext from './I18nContext';
import { TRANSLATIONS, Label } from './definitions';

export default function useTranslations() {
	const language = useContext(I18nContext);
	return useCallback((label: Label): string => {
		return TRANSLATIONS[label][language];
	}, [language]);
}
