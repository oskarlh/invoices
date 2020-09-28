import React from 'react';
import { render } from '@testing-library/react';
import InvoicingApp from '.';

describe('InvoicingApp', () => {
  it('renders', () => {
    render(<InvoicingApp />);
  });
});
