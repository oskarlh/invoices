import React, { ReactElement } from 'react';

import { I18nProvider } from 'components/i18n';
import { ThemeProvider } from 'components';

import {
  InvoicingHeader,
  InvoicingMainContent,
  InvoicingNavMenu,
} from 'components/invoicing';

import styles from './styles.module.css';

function App(): ReactElement {
  return (
    <I18nProvider>
      <ThemeProvider>
        <div className={styles.app}>
          <div className={styles.headerAndMenu}>
            <InvoicingHeader />
            <InvoicingNavMenu />
          </div>
          <InvoicingMainContent />
        </div>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
