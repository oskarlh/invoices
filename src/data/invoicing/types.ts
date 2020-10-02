import { Currency } from './currencies';

export type Id = number;

export type WithoutId<T> = Omit<T, 'id'>;

export interface HasId {
  readonly id: Id;
}

export interface InvoiceLineItem {
  readonly unitPrice: number;
  readonly quantity: number;
  readonly description: string;
}

export interface Invoice extends HasId {
  readonly currency: Currency;
  readonly dueDate: string;
  readonly emailAddress: string;
  readonly lineItems: InvoiceLineItem[];
  readonly notes: string;
  readonly paid: boolean;
  readonly title: string;
}
