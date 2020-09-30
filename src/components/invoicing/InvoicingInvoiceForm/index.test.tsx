import React from 'react';
import { render } from '@testing-library/react';
import InvoicingInvoiceForm from '.';
import { Invoice } from 'data/invoicing/types';

const invoice: Invoice = {
  currency: 'USD',
  dueDate: '2020-04-16',
  emailAddress: 'arnold@example.com',
  id: 2038,
  lineItems: [],
  notes: '',
  paid: true,
  title: 'An invoice',
};

describe('InvoicingInvoiceForm', () => {
  it('renders', () => {
    const { getByText } = render(
      <InvoicingInvoiceForm existingInvoice={invoice} />
    );
    expect(getByText('Paid')).toBeInTheDocument();
  });
});
