import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initTranslations } from '../../../server/configs/translations';
import { NNAppProviderProps } from '../../../types';

export const TranslationsProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: Omit<NNAppProviderProps, 'translationsModule'>) => {
  const i18nInstance = createInstance();

  initTranslations({
    locale,
    namespaces,
    i18nInstance,
    resources,
  });

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};
