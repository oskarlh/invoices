import React, { memo } from 'react';
import { currencies, Currency } from 'data/invoicing/currencies';
import { useTranslation } from 'components/i18n';
import { StyledButton } from 'components';

export interface Props {
  currency?: Currency;
  onChange?: (newCurrency: Currency) => void;
}

function InvoicingCurrencySelector({
  currency: activatedCurrency,
  onChange,
}: Props) {
  const translate = useTranslation();

  return (
    <div>
      {translate('invoicing/choose currency') + ' '}
      {currencies.map((currency) => (
        <StyledButton
          disabled={currency === activatedCurrency}
          key={currency}
          onClick={onChange ? () => onChange(currency) : undefined}
        >
          {currency}
        </StyledButton>
      ))}
    </div>
  );
}

export default memo(InvoicingCurrencySelector);
