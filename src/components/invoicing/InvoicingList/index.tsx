import React, { memo, ReactElement } from 'react';

import { Translate } from 'components/i18n';
import { Invoice } from 'data/invoicing/types';

import styles from './styles.module.css';
import { SimpleTable, SimpleTableColumn } from 'components';

function InvoiceTotal({
  row: { currency, lineItems },
}: {
  row: Invoice;
}): ReactElement {
  const sum = lineItems.reduce(
    (total, { baseValue, count }) => total + count * baseValue,
    0
  );
  return (
    <>
      {sum} {currency}
    </>
  );
}

const columns: SimpleTableColumn<Invoice>[] = [
  {
    cell: 'dueDate',
    compare: 'dueDate',
    heading: () => <Translate label="invoicing/due date" />,
  },
  {
    cell: InvoiceTotal,
    compare: 'currency',
    heading: () => <Translate label="invoicing/total" />,
  },
];

export interface Props {
  invoices: Invoice[];
}

function InvoicingList({ invoices }: Props) {
  return (
    <div className={styles.container}>
      <SimpleTable<Invoice>
        className={styles.table}
        columns={columns}
        rows={invoices}
        idKey="id"
      />
    </div>
  );
}

export default memo(InvoicingList);
