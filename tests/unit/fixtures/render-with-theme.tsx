import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/theme';

const renderWithTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export { renderWithTheme as render };
export { screen } from '@testing-library/react';
