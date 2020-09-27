import React from 'react';
import { render } from '@testing-library/react';
import InvoicingApp from './InvoicingApp';

test('renders learn react link', () => {
  const { getByText } = render(<InvoicingApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
