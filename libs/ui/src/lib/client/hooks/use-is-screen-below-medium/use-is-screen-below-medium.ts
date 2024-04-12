import { useMediaQuery, useTheme } from '@mui/material';

export const useIsScreenBelowMedium = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'), { defaultMatches: false });
};
