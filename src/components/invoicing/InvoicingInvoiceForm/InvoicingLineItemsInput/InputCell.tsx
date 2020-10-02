import React, { memo } from 'react';

import { StyledInput } from 'components';
import { InvoiceLineItem } from 'data/invoicing/types';

import { Callbacks } from './common';

function InputCell({
  extra: { onValueChange },
  invoiceField,
  row,
  type,
}: {
  extra: Callbacks;
  invoiceField: keyof InvoiceLineItem;
  row: InvoiceLineItem;
  type: string;
}) {
  return (
    <StyledInput
      type={type}
      onChange={(event: React.FormEvent<HTMLInputElement>) => {
        onValueChange(
          invoiceField,
          (event.target as HTMLInputElement).value,
          row
        );
      }}
      value={row[invoiceField]}
    />
  );
}

export default memo(InputCell);
