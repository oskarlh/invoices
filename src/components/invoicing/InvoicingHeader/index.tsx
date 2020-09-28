import React from 'react';

import { classNames } from 'utilities';
import { useTranslation } from 'components/i18n';

import styles from './styles.module.css';
import logo from './logo.svg';

export interface Props {
  className?: string;
}

export default function InvoicingHeader({ className }: Props) {
  const translate = useTranslation();
  return (
    <header className={classNames(styles.header, className)}>
      <img src={logo} className={styles.logo} alt={translate('logo')} />
      <h1>{translate('invoicing/app name')}</h1>
    </header>
  );
}
