import React, { memo, ReactElement } from 'react';

import { Translate } from 'components/i18n';
import { Invoice } from 'data/invoicing/types';

import { SimpleTable, SimpleTableColumn, StyledLink } from 'components';
import { formatCurrency } from 'data/invoicing/currencies';

import styles from './styles.module.css';

function TotalCell({
  row: { currency, lineItems },
}: {
  row: Invoice;
}): ReactElement {
  const sum = lineItems.reduce(
    (total, { quantity, unitPrice }) => total + quantity * unitPrice,
    0
  );
  return <>{formatCurrency(sum, currency)}</>;
}

function ControlsCell({ row: { id } }: { row: Invoice }) {
  return (
    <>
      <StyledLink className={styles.controlsLink} to={'edit/' + id}>
        Edit
      </StyledLink>
    </>
  );
}

function DueDateCell({ row: { dueDate, paid } }: { row: Invoice }) {
  // TODO: Handle time zone differences somehow
  const isOverdue = !paid && new Date(dueDate).getTime() >= Date.now();
  return (
    <>
      {isOverdue && (
        <span aria-label="Overdue " role="img">
          ⚠️
        </span>
      )}
      {dueDate}
    </>
  );
}

function PaidCell({ row: { paid } }: { row: Invoice }) {
  return <Translate label={paid ? 'yes' : 'no'} />;
}

const columns: SimpleTableColumn<Invoice>[] = [
  {
    cell: PaidCell,
    compare: 'paid',
    heading: () => <Translate label="invoicing/paid" />,
  },
  {
    cell: 'title',
    compare: 'title',
    heading: () => <Translate label="invoicing/title" />,
  },
  {
    cell: 'emailAddress',
    compare: 'emailAddress',
    heading: () => <Translate label="invoicing/email to" />,
  },
  {
    cell: DueDateCell,
    compare: 'dueDate',
    heading: () => <Translate label="invoicing/due date" />,
  },
  {
    cell: TotalCell,
    compare: 'currency',
    heading: () => <Translate label="invoicing/total" />,
  },
  {
    cell: ControlsCell,
    cellClassName: styles.controlsCell,
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
