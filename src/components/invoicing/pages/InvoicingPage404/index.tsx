import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';

import { TranslationProps, withTranslation } from 'components/i18n';

function InvoicingPageInvoiceList({
  translate,
}: RouteComponentProps & TranslationProps): ReactElement {
  return <div>{translate('invoicing/page not found')}</div>;
}
export default withTranslation(InvoicingPageInvoiceList);
