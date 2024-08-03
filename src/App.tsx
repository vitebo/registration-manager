import { styled, ThemeProvider } from 'styled-components';

import { Header, HeaderTitle } from '~/components/Header';
import { ModalProvider, NotificationProvider, RegistrationStoreProvider } from '~/contexts';
import { Router } from '~/router';
import { GlobalStyle } from '~/style.tsx';
import { theme } from '~/theme.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export function App() {
  return (
    <RegistrationStoreProvider>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <NotificationProvider>
            <GlobalStyle />
            <Container>
              <Header>
                <HeaderTitle>Caju Front Teste</HeaderTitle>
              </Header>
              <Router />
            </Container>
          </NotificationProvider>
        </ModalProvider>
      </ThemeProvider>
    </RegistrationStoreProvider>
  );
}
