import serverContext from 'server-only-context';

import { DEFAULT_LOCALE } from '../i18n';

export const [getLocale, setLocale] = serverContext(DEFAULT_LOCALE);
