import React from 'react';
import { render } from '@testing-library/react';

import Button from 'components/Button';
import { I18nProvider } from 'components/i18n';

test('renders blarg', () => {
  const { getByText } = render(
    <I18nProvider>
      <Button />
    </I18nProvider>
  );
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
