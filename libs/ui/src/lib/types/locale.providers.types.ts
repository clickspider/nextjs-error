import { BackendModule, Namespace, Resource } from 'i18next';
import { Locale } from './locale.types';

export interface NNAppProviderProps {
  children: React.ReactNode;
  locale: Locale;
  namespaces: Namespace;
  resources: Resource;
  translationsModule: (language: any, namespace: any) => BackendModule<object>;
}
