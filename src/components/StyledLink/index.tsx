import React, { memo, ReactNode } from 'react';
import { Link } from '@reach/router';

import { classNames } from 'utilities';

import styles from './styles.module.css';

export interface Props {
  activeClassName?: string;
  children: ReactNode;
  className?: string;
  to: string;
}

export default memo(function StyledLink({
  activeClassName,
  children,
  className,
  to,
}: Props) {
  const getProps = ({ isCurrent }: { isCurrent: boolean }) => ({
    className: classNames(
      styles.link,
      className,
      isCurrent && styles.activeLink,
      isCurrent && activeClassName
    ),
  });

  return (
    <Link getProps={getProps} to={to}>
      {children}
    </Link>
  );
});
