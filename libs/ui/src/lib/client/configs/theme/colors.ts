
// https://designsystem.nn-group.com/447e2362d/p/88f74e-colour/b/53b6ef

/**
 * @deprecated
 * Use `import { useTheme } from '@mui/material'` instead.
 * - `const { palette: { tokens } } = useTheme(); // tokens.text.brand.value`
 */
const paletteColors = {
  white: '#ffffff',
  black: '#000000',
  orange00: '#fff7ee',
  orange100: '#f6bf80',
  orange300: '#ee7f00',
  orange500: '#ea650d',
  orange700: '#e64415',
  grey00: '#f1edeb',
  grey15: '#41414126',
  grey100: '#e5ded9',
  grey200: '#cac7c7',
  grey400: '#999999',
  grey600: '#666666',
  grey800: '#414141',
  blue00: '#CCDBF2',
  blue100: '#99B7E5',
  blue300: '#6693D8',
  blue500: '#336FCB',
  blue700: '#004BBE',
  green00: '#D2E9E4',
  green100: '#A7D3CA',
  green300: '#7EBEAF',
  green500: '#5AA896',
  green700: '#347663',
  purple00: '#E1DDEF',
  purple100: '#BDB6DD',
  purple300: '#9B91CC',
  purple500: '#796ABB',
  purple700: '#35219B',
};

/**
 * @deprecated
 * Use `import { useTheme } from '@mui/material'` instead.
 * - `const { palette: { tokens } } = useTheme(); // tokens.text.brand.value`
 */
const colors = {
  ...paletteColors,
  brandWhite: paletteColors.white,
  brandLight: paletteColors.orange300,
  brandMedium: paletteColors.orange500,
  brandDark: paletteColors.orange700,

  textDefault: paletteColors.grey800,
  textSubtle: paletteColors.grey600,
  textGhost: paletteColors.grey200,
  textInverted: paletteColors.white,

  uiBackgroundDefault: paletteColors.white,
  uiBackgroundTint: paletteColors.grey00,

  uiBorderDefault: paletteColors.grey400,
  uiBorderHover: paletteColors.grey600,
  uiBorderActive: paletteColors.grey800,

  uiDividerDefault: paletteColors.grey100,
  uiDividerBrand: paletteColors.orange500,

  uiInteractionDefault: paletteColors.orange500,
  uiInteractionPressed: paletteColors.orange700,
  uiInteractionPressedBackground: paletteColors.orange00,
  uiInteractionActive: paletteColors.orange500,
  uiInteractionDisabled: paletteColors.grey100,

  uiFocusOutline: paletteColors.blue700,

  uiIconDefault: paletteColors.grey800,
  uiIconDisabled: paletteColors.grey600,
  uiIconBrand: paletteColors.orange500,
  uiIconInverted: paletteColors.white,

  uiShadow: paletteColors.grey800,
  uiBoxShadowFar: paletteColors.grey15,
  uiBackdrop: `${paletteColors.grey800}80`,
  uiBackdropBlack: `${paletteColors.black}b3`,

  uiFeedbackInformationDefault: paletteColors.blue500,
  uiFeedbackInformationLight: paletteColors.blue00,

  uiFeedbackPositiveDefault: paletteColors.green500,
  uiFeedbackPositiveLight: paletteColors.green00,

  uiFeedbackWarningDefault: paletteColors.orange300,
  uiFeedbackWarningLight: paletteColors.orange00,

  uiFeedbackNegativeDefault: paletteColors.orange700,
  uiFeedbackNegativeLight: paletteColors.orange00,

  uiFeedbackExceededPositive: paletteColors.green700,
  uiFeedbackExceededNegative: paletteColors.orange700,

  dataQualitative01: paletteColors.orange500,
  dataQualitative02: paletteColors.blue500,
  dataQualitative03: paletteColors.green500,
  dataQualitative04: paletteColors.purple500,
  dataQualitative05: paletteColors.orange100,
  dataQualitative06: paletteColors.blue300,
  dataQualitative07: paletteColors.green100,
  dataQualitative08: paletteColors.purple100,

  dataSequential01a: paletteColors.orange700,
  dataSequential01b: paletteColors.orange500,
  dataSequential01c: paletteColors.orange300,
  dataSequential01d: paletteColors.orange100,

  dataSequential02a: paletteColors.blue700,
  dataSequential02b: paletteColors.blue500,
  dataSequential02c: paletteColors.blue300,
  dataSequential02d: paletteColors.blue100,

  dataSequential03a: paletteColors.green700,
  dataSequential03b: paletteColors.green500,
  dataSequential03c: paletteColors.green300,
  dataSequential03d: paletteColors.green100,

  dataSequential04a: paletteColors.purple700,
  dataSequential04b: paletteColors.purple500,
  dataSequential04c: paletteColors.purple300,
  dataSequential04d: paletteColors.purple100,
};



export { paletteColors, colors };
