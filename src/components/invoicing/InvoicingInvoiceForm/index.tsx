import React, { useCallback } from 'react';

import { Invoice } from 'components/invoicing';

import styles from './styles.module.css';

export interface Props {
  invoice?: Invoice;
}

function InvoicingInvoiceForm({ invoice }: Props) {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    alert(data);
    console.log(data);
  }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="number" />
        <input type="submit" value="!" />
      </form>
    </section>
  );
}
export default InvoicingInvoiceForm;
