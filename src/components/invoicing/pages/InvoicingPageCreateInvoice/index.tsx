import React, { ReactElement, useCallback, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { InvoicingInvoiceForm } from 'components/invoicing';
import { Translate } from 'components/i18n';
import { Invoice, WithoutId } from 'data/invoicing/types';
import { createInvoice } from 'data/invoicing/actions';
import { navigateTo } from '../pageRoutes';

export default function InvoicingPageCreateInvoice(
  props: RouteComponentProps
): ReactElement {
  const [error, setSerror] = useState<string | undefined>();
  const [saving, setSaving] = useState(false);

  const onCreate = useCallback((invoice: WithoutId<Invoice>) => {
    setSaving(true);
    createInvoice(invoice)
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        setSerror(String(error));
      });
  }, []);

  if (error) {
    return <>{error}</>;
  }

  if (saving) {
    return <Translate label="saving changes" />;
  }

  return <InvoicingInvoiceForm onCreate={onCreate} />;
}
