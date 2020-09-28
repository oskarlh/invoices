import { loadInvoiceList } from './actions';

describe('invoicing data actions', () => {
  it('loadInvoiceList returns fake invoices', async () => {
    const invoices = await loadInvoiceList();
    expect(invoices.length).toBeGreaterThan(0);
  });
});
