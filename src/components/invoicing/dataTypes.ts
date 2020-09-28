export interface InvoiceLineItem {
  baseValue: number;
  count: number;
}

export interface Invoice {
  currency: string;
  recipientName: string;
}
