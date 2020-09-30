import React, { memo } from 'react';

import { classNames } from 'utilities';
import { useTranslation } from 'components/i18n';
import StyledLink from 'components/StyledLink';
import {
  pageRoutes,
  rootPathPrefix,
} from 'components/invoicing/pages/pageRoutes';

import styles from './styles.module.css';

export interface Props {
  className?: string;
}

function InvoicingNavMenu({ className }: Props) {
  const translate = useTranslation();
  return (
    <nav className={classNames(styles.menu, className)}>
      <ul>
        {pageRoutes.map(
          ({ navMenuLabel, navMenuLinkPath }, index) =>
            navMenuLabel &&
            navMenuLinkPath && (
              <li key={index}>
                <StyledLink
                  activeClassName={styles.activeLink}
                  className={styles.link}
                  to={rootPathPrefix + navMenuLinkPath}
                >
                  {translate(navMenuLabel)}
                </StyledLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default memo(InvoicingNavMenu);
