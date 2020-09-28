import React, { ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import usePromise from 'react-use-promise';

import { InvoicingList } from 'components/invoicing';
import { Invoice } from 'data/invoicing/types';
import { loadInvoiceList } from 'data/invoicing/actions';

import styles from './index.module.css';

export default function InvoicingPageInvoiceList(
  props: RouteComponentProps
): ReactElement {
  const [invoices, invoicesError] = usePromise(loadInvoiceList, []);

  if (invoicesError) {
    return <>{String(invoicesError)}</>;
  }

  return <InvoicingList invoices={invoices || []} />;
}
