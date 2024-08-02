import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from '~/App';
import { APP_ROOT_ELEMENT_ID } from '~/constants';
import { DiProvider, ModalProvider, NotificationProvider, RegistrationStoreProvider } from '~/contexts';
import { HttpClientFetch } from '~/drivers';
import { RegistrationGatewayHttp } from '~/gateways';

import { GlobalStyle } from './style';
import { theme } from './theme';

const httpCLient = new HttpClientFetch();

const diProvide = {
  registrationGateway: new RegistrationGatewayHttp(httpCLient)
};

createRoot(document.getElementById(APP_ROOT_ELEMENT_ID)!).render(
  <DiProvider provide={diProvide}>
    <RegistrationStoreProvider>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <NotificationProvider>
            <GlobalStyle />
            <App />
          </NotificationProvider>
        </ModalProvider>
      </ThemeProvider>
    </RegistrationStoreProvider>
  </DiProvider>
);
