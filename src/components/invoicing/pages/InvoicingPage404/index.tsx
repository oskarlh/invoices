import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';

import { useTranslation } from 'components/i18n';

export default function InvoicingPageInvoiceList(props: RouteComponentProps): ReactElement {
  const translate = useTranslation();
  return <div>{translate('invoicing/page not found')}</div>;
}
