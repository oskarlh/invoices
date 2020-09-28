import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import I18nProvider from './I18nProvider';
import { Label, supportedLanguages, translations } from './definitions';
import withTranslation, { TranslationProps } from './withTranslation';

interface TestComponentProps {
  label: Label;
}

const TestComponent = withTranslation(function TestComponent({
  label,
  translate,
}: TestComponentProps & TranslationProps): ReactElement {
  return <span>{translate(label)}</span>;
});

describe('withTranslation', () => {
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
