import { Locale } from '@ui/types';

export interface Params {
  locale: Locale;
}

export interface GenerateMetadataProps {
  params: Params;
}

export interface LayoutProps extends GenerateMetadataProps {
  children: React.ReactNode;
}
