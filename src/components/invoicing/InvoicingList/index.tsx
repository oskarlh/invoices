import React, { useCallback } from 'react';

import { Invoice } from 'data/invoicing/types';

import styles from './styles.module.css';

export interface Props {
  invoices: Invoice[];
}

function InvoicingList({ invoices }: Props) {
  return (
    <div className={styles.container}>
      {invoices.map((invoice) => (
        <div key={invoice.id}>{invoice.currency}</div>
      ))}
    </div>
  );
}
export default InvoicingList;
