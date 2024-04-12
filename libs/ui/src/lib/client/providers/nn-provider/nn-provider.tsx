import { ThemeProvider } from '@mui/material/styles';
import { NNAppProviderProps } from '../../../types';
import { useCreateTheme } from '../../hooks';
import { TranslationsProvider } from '../translations-provider';

export function NNProvider({
  children,
  locale,
  namespaces,
  resources,
}: Omit<NNAppProviderProps, 'translationsModule'>) {
  const theme = useCreateTheme();

  return (
    <ThemeProvider theme={theme}>
      <TranslationsProvider
        namespaces={namespaces}
        locale={locale}
        resources={resources}
      >
        {children}
      </TranslationsProvider>
    </ThemeProvider>
  );
}
