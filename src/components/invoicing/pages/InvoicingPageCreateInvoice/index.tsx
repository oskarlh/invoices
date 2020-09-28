import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { InvoicingInvoiceForm } from 'components/invoicing';

import styles from './index.module.css';

export default function InvoicingPageCreateInvoice(
  props: RouteComponentProps
): ReactElement {
  return <InvoicingInvoiceForm />;
}
