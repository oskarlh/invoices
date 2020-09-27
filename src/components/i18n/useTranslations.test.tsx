import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import I18nProvider from './I18nProvider';
import { Label, supportedLanguages, translations } from './definitions';
import useTranslations from './useTranslations';

interface TestComponentProps {
  label: Label;
}
function TestComponent({ label }: TestComponentProps): ReactElement {
  const text: string = useTranslations()(label);
  return <>{text}</>;
}

describe('useTranslations', () => {
  it('translates a label to every language', () => {
    const someLabel = Object.keys(translations)[0] as Label;

    for (const language of supportedLanguages) {
      const expectedTranslation: string = translations[someLabel][language];

      const { getByText } = render(
        <I18nProvider language={language}>
          <TestComponent label={someLabel} />
        </I18nProvider>
      );
      expect(getByText(expectedTranslation)).toBeInTheDocument();
    }
  });
});
