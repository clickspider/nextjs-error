import { Config } from 'next-i18n-router/dist/types';
import { Locale } from '../../types';

export const i18nConfig: Config = {
  locales:
    process.env.NEXT_PUBLIC_ENABLE_TRANSLATION === 'true'
      ? [Locale.en, Locale.nl]
      : [Locale.nl],
  defaultLocale: Locale.nl,
};
