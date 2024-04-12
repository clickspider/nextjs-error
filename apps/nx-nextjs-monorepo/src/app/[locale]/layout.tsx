import { NNLayout } from '@ui/server';
import {
  getServerTranslations,
  I18N_NAMESPACES,
  translationsModule,
} from '../../shared';
import type { GenerateMetadataProps, LayoutProps } from './layout.types';

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataProps) {
  const { t } = await getServerTranslations(locale);

  return {
    title: t('home:appTitle'),
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  return (
    <NNLayout
      params={params}
      namespaces={I18N_NAMESPACES}
      translationsModule={translationsModule}
    >
      {children}
    </NNLayout>
  );
}
