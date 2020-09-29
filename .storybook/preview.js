import React from 'react';
import ThemeProvider from 'components/ThemeProvider';
import { I18nProvider, supportedLanguages } from 'components/i18n';

export const decorators = [
  (Story) => <ThemeProvider>{Story()}</ThemeProvider>,
  (Story, { globals: { language } }) => {
    return (
      <I18nProvider language={language || undefined}>{Story()}</I18nProvider>
    );
  },
];

export const globalTypes = {
  language: {
    name: 'Language',
    defaultValue: null,
    toolbar: {
      icon: 'globe',
      items: [
        {
          title: 'Your preffered language according to your browser',
          value: null,
        },
        ...supportedLanguages.map((language) => ({
          title: language,
          value: language,
        })),
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
