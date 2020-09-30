import React, { memo, ReactElement, useCallback, useState } from 'react';
import { InvoiceLineItem } from 'data/invoicing/types';
import { SimpleTable, SimpleTableColumn } from 'components';
import { StyledButton, StyledInput } from 'components';
import { Translate } from 'components/i18n';

import styles from './styles.module.css';

export interface Props {
  existingLineItems?: InvoiceLineItem[];
  onChange?: (items: InvoiceLineItem[]) => void;
}

const extraEmptyItem: InvoiceLineItem = {
  description: '',
  quantity: 1,
  unitPrice: 0,
};

interface Callbacks {
  onDelete: (item: InvoiceLineItem) => void;
  onChange: (
    field: keyof InvoiceLineItem,
    newValue: string,
    item: InvoiceLineItem
  ) => void;
}

function createColumns(
  callbacks: Callbacks
): SimpleTableColumn<InvoiceLineItem>[] {
  return [
    {
      cell: ({ row }) => (
        <StyledInput
          type="text"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            callbacks.onChange('description', target.value, row);
          }}
          value={row.description}
        />
      ),
      compare: 'description',
      heading: () => <Translate label="invoicing/item description" />,
    },
    {
      cell: ({ row }) => (
        <StyledInput
          type="number"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            callbacks.onChange('quantity', target.value, row);
          }}
          value={row.quantity}
        />
      ),
      heading: () => <Translate label="quantity" />,
    },
    {
      cell: ({ row }) => (
        <StyledInput
          type="number"
          step="0.01"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            callbacks.onChange('unitPrice', target.value, row);
          }}
          value={row.unitPrice}
        />
      ),
      heading: () => <Translate label="invoicing/price per item" />,
    },
    {
      cell: ({ row }) => (
        <StyledButton
          disabled={row === extraEmptyItem}
          onClick={() => callbacks.onDelete(row)}
        >
          <span aria-label="Delete" role="img">
            ❌
          </span>
        </StyledButton>
      ),
    },
  ];
}

function InvoicingLineItemsInput({
  existingLineItems,
  onChange,
}: Props): ReactElement {
  const [items, setItems] = useState(() => [...(existingLineItems || [])]);
  const [callbacks] = useState<Partial<Callbacks>>({});
  callbacks.onDelete = useCallback(
    (item: InvoiceLineItem) => {
      const newArray = items.filter((i) => i !== item);
      setItems(newArray);
      onChange && onChange(newArray);
    },
    [items, onChange]
  );
  callbacks.onChange = useCallback(
    (field: keyof InvoiceLineItem, newValue: string, item: InvoiceLineItem) => {
      const newObject: InvoiceLineItem = { ...item };

      if (field === 'description') {
        newObject[field] = newValue;
      } else if (field === 'quantity' || field === 'unitPrice') {
        newObject[field] = Number(newValue);
      }

      const newArray: InvoiceLineItem[] = [...items];
      if (item === extraEmptyItem) {
        newArray.push(newObject);
      } else {
        newArray.splice(newArray.indexOf(item), 1, newObject);
      }
      setItems(newArray);
      onChange && onChange(newArray);
    },
    [items, onChange]
  );

  const [columns] = useState(() => createColumns(callbacks as Callbacks));

  return (
    <SimpleTable<InvoiceLineItem>
      className={styles.table}
      columns={columns}
      rows={[...items, extraEmptyItem]}
    />
  );
}

export default memo(InvoicingLineItemsInput);
