import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { theme } from '~/theme';
import { GlobalStyle } from '~/style';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle
  })
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
