import React, {
  memo,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { InvoiceLineItem } from 'data/invoicing/types';
import { SimpleTable, SimpleTableColumn } from 'components';
import { Translate } from 'components/i18n';

import DeleteButtonCell from './DeleteButtonCell';
import InputCell from './InputCell';
import { Callbacks, extraEmptyItem } from './common';

import styles from './styles.module.css';

export interface Props {
  existingLineItems?: InvoiceLineItem[];
  onChange?: (items: InvoiceLineItem[]) => void;
}

const columns: SimpleTableColumn<InvoiceLineItem>[] = [
  {
    cell: (props) => (
      <InputCell invoiceField="description" type="text" {...props} />
    ),
    compare: 'description',
    heading: () => <Translate label="invoicing/item description" />,
  },
  {
    cell: (props) => (
      <InputCell invoiceField="quantity" type="number" {...props} />
    ),
    heading: () => <Translate label="quantity" />,
  },
  {
    cell: (props) => (
      <InputCell invoiceField="unitPrice" type="number" {...props} />
    ),
    heading: () => <Translate label="invoicing/price per item" />,
  },
  {
    cell: DeleteButtonCell,
  },
];

function InvoicingLineItemsInput({
  existingLineItems,
  onChange,
}: Props): ReactElement {
  const [items, setItems] = useState(() => [...(existingLineItems || [])]);

  const stableItemsRef = Object.assign(useState({}), {
    items,
  });

  const onDelete = useCallback(
    (item: InvoiceLineItem) => {
      const newArray = stableItemsRef.items.filter((i) => i !== item);
      setItems(newArray);
      onChange && onChange(newArray);
    },
    [stableItemsRef, onChange]
  );

  const onValueChange = useCallback(
    (field: keyof InvoiceLineItem, newValue: string, item: InvoiceLineItem) => {
      const newObject: InvoiceLineItem = {
        ...item,
        [field]: field === 'description' ? newValue : Number(newValue),
      };

      const newArray: InvoiceLineItem[] = [...stableItemsRef.items];
      if (item === extraEmptyItem) {
        newArray.push(newObject);
      } else {
        newArray.splice(newArray.indexOf(item), 1, newObject);
      }
      setItems(newArray);
      onChange && onChange(newArray);
    },
    [stableItemsRef, onChange]
  );

  const callbacks: Callbacks = useMemo(
    () => ({
      onDelete,
      onValueChange,
    }),
    [onDelete, onValueChange]
  );

  return (
    <SimpleTable<InvoiceLineItem>
      className={styles.table}
      columns={columns}
      extraForCells={callbacks}
      rows={[...items, extraEmptyItem]}
    />
  );
}

export default memo(InvoicingLineItemsInput);
