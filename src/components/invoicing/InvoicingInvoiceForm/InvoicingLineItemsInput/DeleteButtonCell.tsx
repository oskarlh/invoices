import React, { memo } from 'react';

import { StyledButton } from 'components';
import { InvoiceLineItem } from 'data/invoicing/types';

import { Callbacks, extraEmptyItem } from './common';

function DeleteButtonCell({
  extra: { onDelete },
  row,
}: {
  extra: Callbacks;
  row: InvoiceLineItem;
}) {
  return (
    <StyledButton
      disabled={row === extraEmptyItem}
      onClick={() => onDelete(row)}
    >
      <span aria-label="Delete" role="img">
        ❌
      </span>
    </StyledButton>
  );
}

export default memo(DeleteButtonCell);
