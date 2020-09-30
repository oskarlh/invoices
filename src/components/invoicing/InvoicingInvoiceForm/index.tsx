import React, { memo, useCallback, useMemo, useState } from 'react';

import { Invoice, WithoutId } from 'data/invoicing/types';
import InvoicingLineItemsInput from './InvoicingLineItemsInput';
import { useTranslation } from 'components/i18n';
import { InvoicingCurrencySelector } from 'components/invoicing';
import { StyledButton, StyledTextArea } from 'components';
import {
  Currency,
  defaultCurrency,
  formatCurrency,
} from 'data/invoicing/currencies';

import styles from './styles.module.css';
import StyledInput from 'components/StyledInput';

export interface Props {
  existingInvoice?: Invoice;
  onCreate?: (invoice: WithoutId<Invoice>) => void;
  onSaveChanges?: (invoice: Invoice) => void;
}

function InvoicingInvoiceForm({
  existingInvoice,
  onCreate,
  onSaveChanges,
}: Props) {
  const translate = useTranslation();

  const [currency, setCurrency] = useState<Currency>(
    existingInvoice?.currency || defaultCurrency
  );
  const [dueDate, setDueDate] = useState<string>(
    existingInvoice?.dueDate || ''
  );
  const [emailAddress, setEmailAddress] = useState<string>(
    existingInvoice?.emailAddress || ''
  );
  const [lineItems, setLineItems] = useState(existingInvoice?.lineItems || []);
  const [notes, setNotes] = useState<string>(existingInvoice?.notes || '');
  const [paid, setPaid] = useState(Boolean(existingInvoice?.paid));
  const [title, setTitle] = useState(existingInvoice?.title || '');

  const sum = useMemo(
    () =>
      (lineItems || []).reduce(
        (total, { quantity, unitPrice }) => total + quantity * unitPrice,
        0
      ),
    [lineItems]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const newData: WithoutId<Invoice> = {
        currency,
        dueDate,
        emailAddress,
        lineItems,
        notes,
        paid,
        title,
      };

      if (existingInvoice) {
        onSaveChanges && onSaveChanges({ id: existingInvoice.id, ...newData });
      } else {
        onCreate && onCreate(newData);
      }
    },
    [
      currency,
      dueDate,
      emailAddress,
      existingInvoice,
      lineItems,
      notes,
      onCreate,
      onSaveChanges,
      paid,
      title,
    ]
  );

  const sendEmail = useCallback(() => {
    globalThis.alert(translate('invoicing/email sent to') + emailAddress);
  }, [emailAddress, translate]);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p>
          <StyledButton type="submit">
            {translate(
              existingInvoice
                ? 'invoicing/save changes'
                : 'invoicing/create invoice'
            )}
          </StyledButton>
          <StyledButton disabled={!emailAddress} onClick={sendEmail}>
            {translate('invoicing/email invoice')}
          </StyledButton>
          {' ' +
            translate('invoicing/total') +
            ': ' +
            formatCurrency(sum, currency) +
            ' '}

          <label>
            <input
              type="checkbox"
              checked={paid}
              onChange={(event: any) => {
                setPaid(event.target.checked);
              }}
            />
            {translate('invoicing/paid')}
          </label>
        </p>
        <StyledInput
          type="text"
          placeholder={translate('invoicing/title')}
          value={title}
          onChange={(event: any) => {
            setTitle(event.target.value);
          }}
          required
        />
        <StyledInput
          type="email"
          placeholder={translate('invoicing/email to')}
          value={emailAddress}
          onChange={(event: any) => {
            setEmailAddress(event.target.value);
          }}
        />
        <StyledInput
          type="date"
          title={translate('invoicing/due date')}
          value={dueDate}
          onChange={(event: any) => {
            setDueDate(event.target.value);
          }}
          required
        />
        <StyledTextArea value={notes} onChange={setNotes}>
          Notes
        </StyledTextArea>
        <InvoicingCurrencySelector currency={currency} onChange={setCurrency} />
        <InvoicingLineItemsInput
          existingLineItems={existingInvoice?.lineItems}
          onChange={setLineItems}
        />
      </form>
    </section>
  );
}
export default memo(InvoicingInvoiceForm);
