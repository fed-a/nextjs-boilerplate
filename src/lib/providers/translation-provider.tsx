import { Resource, createInstance } from 'i18next';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

import { Locale, NS, NS_LIST, initTranslations } from '../i18n';

interface I18nextProvider {
  locale: Locale;
  namespaces: NS[] | typeof NS_LIST;
  resources?: Resource;
}

export function TranslationsProvider({ children, locale, namespaces, resources }: PropsWithChildren<I18nextProvider>) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
