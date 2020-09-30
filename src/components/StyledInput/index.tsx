import React from 'react';
import { classNames } from 'utilities';
import styles from './styles.module.css';

export default function StyledInput({ ...props }) {
  const className: string =
    typeof props.className === 'string' ? props.className : '';
  return (
    <div className={styles.container}>
      <input {...props} className={classNames(styles.input, className)} />
    </div>
  );
}
