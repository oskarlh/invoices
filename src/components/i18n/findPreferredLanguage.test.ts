import findPreferredLanguage from './findPreferredLanguage';
import { fallbackLanguage, supportedLanguages } from './definitions';

describe('findPreferredLanguage', () => {
  let languageGetter: any;
  beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, 'languages', 'get');
  });

  const unsupportedLanguage = 'not-a-language';

  it('returns the first supported language preferred by the user', () => {
    for (const language of supportedLanguages) {
      languageGetter.mockReturnValue([
        unsupportedLanguage,
        language,
        unsupportedLanguage,
      ]);
      expect(findPreferredLanguage()).toBe(language);
    }
  });

  it("returns the fallback language if there's not match", () => {
    languageGetter.mockReturnValue([unsupportedLanguage]);
    expect(findPreferredLanguage()).toBe(fallbackLanguage);
  });
});
