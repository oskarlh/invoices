import React, { ReactElement } from 'react';
import { useTranslations } from 'i18n';

export default function Button(): ReactElement {
  const translate = useTranslations();
  return <button>{translate('WELCOME')}</button>;
}
