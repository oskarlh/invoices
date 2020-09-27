import React, { ReactElement } from 'react';
import { useTranslations } from 'components/i18n';

export default function Button(): ReactElement {
  const translate = useTranslations();
  return <button>{translate('WELCOME')}</button>;
}
