import 'styled-components';

import { theme } from './theme';

declare module 'styled-components' {
  type Colors = typeof theme.colors;
  type Spacing = typeof theme.spacing;
  type BorderRadius = typeof theme.borderRadius;
  type FontSize = typeof theme.fontSizes;
  type FontWeight = typeof theme.fontWeight;
  type BoxShadow = typeof theme.boxShadow;
  type BorderWidth = typeof theme.borderWidth;
  type Screens = typeof theme.screens;

  export interface DefaultTheme {
    colors: Colors;
    spacing: Spacing;
    borderRadius: BorderRadius;
    fontSize: FontSize;
    fontWeight: FontWeight;
    boxShadow: BoxShadow;
    borderWidth: BorderWidth;
    screens: Screens;
  }
}
