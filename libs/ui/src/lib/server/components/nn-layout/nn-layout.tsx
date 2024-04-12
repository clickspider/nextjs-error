/* eslint-disable @typescript-eslint/ban-ts-comment */
import { dir } from 'i18next';
import { Locale, NNAppProviderProps } from '../../../types';
import { initTranslations } from '../../configs';
import { NNAppProvider } from '../../providers';
import { SEO } from '../seo';

interface NNLayoutProps
  extends Omit<NNAppProviderProps, 'resources' | 'locale'> {
  params: {
    locale: Locale;
  };
}

export async function NNLayout({
  children,
  namespaces,
  params: { locale },
  translationsModule,
}: NNLayoutProps) {
  const { t, resources } = await initTranslations({
    locale,
    namespaces,
    translationsModule,
  });

  const metaTitle = t('home:appTitle');
  const metaDescription = t('home:appDescription');

  console.log('✨ [NNLayout] translations loaded:', {
    metaTitle,
    metaDescription,
  });

  return (
    <html lang={locale} dir={dir(locale)}>
      <SEO metaTitle={metaTitle} metaDescription={metaDescription} />

      <body>
        <NNAppProvider
          locale={locale}
          namespaces={namespaces}
          resources={resources}
        >
          {children}
        </NNAppProvider>
      </body>
    </html>
  );
}
