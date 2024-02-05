'use client';

import React, { PropsWithChildren } from 'react';

import { Locale, NS_LIST } from '../i18n';

import { TranslationsProvider } from './translation-provider';

interface ProvidersProps {
  resources: any;
  locale: Locale;
}

export function Providers({ children, locale, resources }: PropsWithChildren<ProvidersProps>) {
  return (
    <TranslationsProvider namespaces={NS_LIST} locale={locale} resources={resources}>
      {children}
    </TranslationsProvider>
  );
}
