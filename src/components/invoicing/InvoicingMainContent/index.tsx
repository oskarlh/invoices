import React, { memo } from 'react';
import { Router } from '@reach/router';

import { classNames } from 'utilities';

import {
  pageRoutes,
  rootPathPrefix,
} from 'components/invoicing/pages/pageRoutes';

import styles from './styles.module.css';

export interface Props {
  className?: string;
}

function InvoicingMainContent({ className }: Props) {
  return (
    <main className={classNames(styles.main, className)}>
      <Router basepath={rootPathPrefix}>
        {pageRoutes.map(({ Component, defaultRoute, routingPath }, index) => (
          <Component key={index} default={defaultRoute} path={routingPath} />
        ))}
      </Router>
    </main>
  );
}
export default memo(InvoicingMainContent);
