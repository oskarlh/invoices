import React, { ReactElement, ReactNode } from 'react';
import styles from './index.module.css';

export interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props): ReactElement {
  return <div className={styles.themeProvider}>{children}</div>;
}
