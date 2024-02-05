import { I18NConfig } from 'next/dist/server/config-shared';
import { i18nRouter } from 'next-i18n-router';

export const LOCALES = ['ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ru';

export const NS_LIST = ['common'] as const;
export type NS = (typeof NS_LIST)[number];
export const DEFAULT_NS: NS = 'common';

export const LOCALE_NAMES: Record<Locale, string> = {
  ru: 'Русский',
};

export type LocaleParam = {
  locale: Locale;
};
export type PropsWithLocale<T = object> = T & {
  params: LocaleParam;
};

export type I18nConfig = Parameters<typeof i18nRouter>[1];

export function getOptions(lng = DEFAULT_LOCALE, ns: string = DEFAULT_NS) {
  return {
    // debug: true,
    supportedLngs: LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    lng,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    ns,
  };
}

export const i18nConfig: I18NConfig = {
  locales: [...LOCALES],
  defaultLocale: DEFAULT_LOCALE,
};
