export const currencies = ['DKK', 'EUR', 'NOK', 'SEK', 'TWD', 'USD'] as const;
export type Currency = typeof currencies[number];
export const defaultCurrency: Currency = 'SEK';

export function formatCurrency(amount: number, currency: Currency) {
  const formatter = new Intl.NumberFormat(undefined, {
    currency,
    style: 'currency',
  });
  return formatter.format(amount);
}
