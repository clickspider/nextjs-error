import { createTheme } from '@mui/material/styles';
import { colors as deprecatedColors } from './colors';
import { BREAKPOINT_STEP, breakpoints } from './constants';

const themeSpacingFn = (factor: number) => `${0.5 * factor}rem`; // equivalent to 8px increments

export const theme = createTheme({
  spacing: themeSpacingFn,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
    step: BREAKPOINT_STEP,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
        disableGutters: true,
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: 4,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: deprecatedColors.uiDividerDefault,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: ' 2rem',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        size: 'medium',
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiFormControl: { defaultProps: { variant: 'standard' } },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
        formControl: {
          position: 'relative',
          top: 'unset',
          left: 'unset',
          transform: 'none',
        },
      },
      defaultProps: {
        shrink: false,
        disableAnimation: true,
      },
    },
    MuiSelect: { defaultProps: { variant: 'outlined' } },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
      defaultProps: { size: 'small' },
    },
    MuiDialog: { defaultProps: { fullWidth: false, maxWidth: 'xs' } },
    MuiCardActions: {
      styleOverrides: {
        spacing: { padding: '16px' },
      },
    },
  },
});
