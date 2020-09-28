// Make it bigint or string if full 64-bit id
export type Id = number;

// In a real app Money should probably be an integer to avoid
// precision errors, especially for currencies with many decimals.
// But to keep things simple, let's not do that.
export type Money = number;

export type WithoutId<T> = Omit<T, 'id'>;

export interface HasId {
  id: Id;
}

export interface InvoiceLineItem {
  baseValue: Money;
  count: number;
  description: string;
}

export interface Invoice extends HasId {
  currency: string;
  lineItems: InvoiceLineItem[];
  recipient: string;
}
