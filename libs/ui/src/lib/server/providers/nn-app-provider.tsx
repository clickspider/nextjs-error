'use server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { GlobalStyles, NNProvider } from '../../client';
import { NNAppProviderProps } from '../../types';

export const NNAppProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: Omit<NNAppProviderProps, 'translationsModule'>) => {
  return (
    <AppRouterCacheProvider>
      <NNProvider locale={locale} namespaces={namespaces} resources={resources}>
        <GlobalStyles />
        {children}
      </NNProvider>
    </AppRouterCacheProvider>
  );
};
