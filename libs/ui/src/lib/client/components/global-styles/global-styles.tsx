import { css, GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={(theme) => css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: ${theme.typography.fontFamily};
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html {
        scroll-padding-top: ${!theme.breakpoints.down('md') && '5rem'};
        scroll-behavior: smooth;
      }
    `}
  />
);
