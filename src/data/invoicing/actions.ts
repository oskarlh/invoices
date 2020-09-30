import { Id, Invoice, WithoutId } from './types';
import {
  insertNewListItem,
  loadList,
  loadListItem,
  updateListItem,
} from './mockBackendApi';

export async function loadInvoice(id: Id): Promise<Invoice> {
  return loadListItem('invoices', id);
}

export async function loadInvoiceList(): Promise<Invoice[]> {
  return loadList('invoices');
}

export async function createInvoice(
  invoice: WithoutId<Invoice>
): Promise<Invoice> {
  return insertNewListItem('invoices', invoice);
}

export async function updateInvoice(invoice: Invoice): Promise<Invoice> {
  return updateListItem('invoices', invoice);
}
