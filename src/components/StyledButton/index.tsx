import React, { ReactElement, ReactNode } from 'react';
import { classNames } from 'utilities';
import styles from './styles.module.css';

export interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

export default function StyledButton({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
}: Props): ReactElement {
  return (
    <button
      className={classNames(
        styles.button,
        typeof className === 'string' && className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
