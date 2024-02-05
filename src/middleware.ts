import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import { DEFAULT_LOCALE, I18nConfig, LOCALES } from './lib/i18n';

const i18nConfig: I18nConfig = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
};

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
