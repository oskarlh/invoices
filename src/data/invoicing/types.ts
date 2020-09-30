import { Currency } from './currencies';

export type Id = number;

export type WithoutId<T> = Omit<T, 'id'>;

export interface HasId {
  id: Id;
}

export interface InvoiceLineItem {
  unitPrice: number;
  quantity: number;
  description: string;
}

export interface Invoice extends HasId {
  currency: Currency;
  dueDate: string;
  emailAddress: string;
  lineItems: InvoiceLineItem[];
  notes: string;
  paid: boolean;
  title: string;
}
