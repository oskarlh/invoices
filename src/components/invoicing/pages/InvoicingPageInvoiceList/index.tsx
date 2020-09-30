import React, { ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import usePromise from 'react-use-promise';

import { InvoicingList } from 'components/invoicing';
import { loadInvoiceList } from 'data/invoicing/actions';

export default function InvoicingPageInvoiceList(
  props: RouteComponentProps
): ReactElement {
  const [invoices, error] = usePromise(loadInvoiceList, []);

  if (error) {
    return <>{'' + error}</>;
  }

  return <InvoicingList invoices={invoices || []} />;
}
