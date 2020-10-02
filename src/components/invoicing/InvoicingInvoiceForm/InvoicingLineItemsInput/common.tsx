import { InvoiceLineItem } from 'data/invoicing/types';

export interface Callbacks {
  onDelete: (item: InvoiceLineItem) => void;
  onValueChange: (
    field: keyof InvoiceLineItem,
    newValue: string,
    item: InvoiceLineItem
  ) => void;
}

export const extraEmptyItem: InvoiceLineItem = {
  description: '',
  quantity: 1,
  unitPrice: 0,
};
