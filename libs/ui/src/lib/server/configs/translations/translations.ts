import {
  BackendModule,
  Namespace,
  Resource,
  createInstance,
  i18n,
} from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from '../next-i18next.config';
import { Locale } from '../../../types';

interface InitTranslationsProps {
  locale: Locale;
  namespaces: Namespace;
  i18nInstance?: i18n;
  resources?: Resource;
  translationsModule?: (language: any, namespace: any) => BackendModule<object>;
}

export const initTranslations = async ({
  locale,
  namespaces,
  i18nInstance,
  resources,
  translationsModule,
}: InitTranslationsProps) => {
  i18nInstance = i18nInstance ?? createInstance();

  i18nInstance.use(initReactI18next);

  if (resources == null && translationsModule != null) {
    i18nInstance.use(resourcesToBackend(translationsModule));
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
};
