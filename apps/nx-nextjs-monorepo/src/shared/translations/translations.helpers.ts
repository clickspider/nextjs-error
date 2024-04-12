import { initTranslations } from '@ui/server';
import {
  Locale,
  NNAppProviderProps,
} from '@ui/types';
import { BackendModule } from 'i18next';
import { I18N_NAMESPACES } from './translations.constants';

export const translationsModule: NNAppProviderProps['translationsModule'] = (
  lang,
  namespace
) =>
  import(
    `../../../public/locales/${lang}/${namespace}.json`
  ) as unknown as BackendModule<object>;

export const getServerTranslations = async (
  locale: Locale,
  namespaces = I18N_NAMESPACES,
  translations = translationsModule
) => {
  return await initTranslations({
    locale,
    namespaces,
    translationsModule: translations,
  });
};
