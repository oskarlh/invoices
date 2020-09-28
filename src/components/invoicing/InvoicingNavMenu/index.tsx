import React, { memo } from 'react';
import { Link } from '@reach/router';

import { classNames } from 'components';
import { TranslationProps, withTranslation } from 'components/i18n';

import pageRoutes from 'components/invoicing/pages/pageRoutes';

import styles from './styles.module.css';

function getLinkProps({ isCurrent }: { isCurrent: boolean }) {
  return { className: classNames(styles.link, isCurrent && styles.activeLink) };
}

export interface Props {
  className?: string;
}

function InvoicingNavMenu({ className, translate }: Props & TranslationProps) {
  return (
    <nav className={classNames(styles.menu, className)}>
      <ul>
        {pageRoutes.map(
          ({ navMenuLabel, navMenuLinkPath }, index) =>
            navMenuLabel &&
            navMenuLinkPath && (
              <li key={index}>
                <Link
                  className={styles.link}
                  getProps={getLinkProps}
                  to={navMenuLinkPath}
                >
                  {translate(navMenuLabel)}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default withTranslation(memo(InvoicingNavMenu));
