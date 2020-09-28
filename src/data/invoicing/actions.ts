import { Id, Invoice } from './types';
import { loadList, loadListItem } from './mockBackendApi';

export async function loadInvoice(id: Id): Promise<Invoice> {
  return loadListItem('invoices', id);
}

export async function loadInvoiceList(): Promise<Invoice[]> {
  return loadList('invoices');
}
