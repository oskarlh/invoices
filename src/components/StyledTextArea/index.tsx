import React, { memo, ReactNode } from 'react';
import { classNames } from 'utilities';
import styles from './styles.module.css';

export interface Props {
  className?: string;
  children?: ReactNode; // A label
  name?: string;
  onChange?: (newValue: string) => void;
  defaultValue?: string;
  value?: string;
}

function StyledTextArea({
  className,
  children,
  defaultValue,
  name,
  onChange,
  value,
}: Props) {
  return (
    <label className={styles.container}>
      <span className={styles.labelText}>{children}</span>
      <textarea
        className={classNames(styles.textarea, className)}
        defaultValue={defaultValue}
        rows={4}
        name={name}
        onChange={
          onChange
            ? (event) => {
                onChange(event.target.value);
              }
            : undefined
        }
        value={value}
      />
    </label>
  );
}

export default memo(StyledTextArea);
