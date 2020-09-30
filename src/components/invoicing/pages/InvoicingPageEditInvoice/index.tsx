import React, { ReactElement, useCallback, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import usePromise from 'react-use-promise';

import { InvoicingInvoiceForm } from 'components/invoicing';
import { loadInvoice, updateInvoice } from 'data/invoicing/actions';
import { Translate } from 'components/i18n';
import { Invoice } from 'data/invoicing/types';
import { navigateTo } from '../pageRoutes';

interface UrlParameters {
  invoiceId: string;
}

export default function InvoicingPageEditInvoice({
  invoiceId: invoiceIdString,
}: RouteComponentProps<UrlParameters>): ReactElement {
  const invoiceId = Number(invoiceIdString);
  const [existingInvoice, loadError] = usePromise(
    () => loadInvoice(invoiceId),
    [invoiceId]
  );

  const [saveError, setSaveSerror] = useState<string | undefined>();
  const [saving, setSaving] = useState(false);

  const onSaveChanges = useCallback((invoice: Invoice) => {
    setSaving(true);
    updateInvoice(invoice)
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        setSaveSerror(String(error));
      });
  }, []);

  if (loadError || saveError) {
    return <>{String(loadError || saveError)}</>;
  }
  if (!existingInvoice || saving) {
    return <Translate label="loading" />;
  }

  if (loadError) {
    return <>{'' + loadError}</>;
  }

  return (
    <InvoicingInvoiceForm
      existingInvoice={existingInvoice}
      onSaveChanges={onSaveChanges}
    />
  );
}
