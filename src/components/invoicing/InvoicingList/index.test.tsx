import React from 'react';
import { render } from '@testing-library/react';

import InvoicingList from '.';
import { Invoice } from 'data/invoicing/types';

const invoices: Invoice[] = [
  {
    currency: 'NOK',
    dueDate: '2020-10-30',
    emailAddress: 'amanda@example.com',
    id: 2038,
    lineItems: [],
    notes: 'lalala',
    paid: true,
    title: 'An invoice',
  },
];

describe('InvoicingList', () => {
  it('renders invoices and their titles', () => {
    const { getByText } = render(<InvoicingList invoices={invoices} />);
    expect(getByText(invoices[0].title)).toBeInTheDocument();
  });
});
