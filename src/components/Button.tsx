import React from 'react';
import { useTranslations } from 'i18n';

export default function Button() {
	const translate = useTranslations();
	return <button>{translate("WELCOME")}</button>
}
