import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { APP_ROOT_ELEMENT_ID } from '~/constants';
import { DiProvider, ModalProvider, NotificationProvider, RegistrationStoreProvider } from '~/contexts';
import { HttpClientFetch } from '~/drivers';
import { RegistrationGatewayHttp } from '~/gateways';
import '~/index.css';

const httpCLient = new HttpClientFetch();

const diProvide = {
  registrationGateway: new RegistrationGatewayHttp(httpCLient)
};

createRoot(document.getElementById(APP_ROOT_ELEMENT_ID)!).render(
  <DiProvider provide={diProvide}>
    <RegistrationStoreProvider>
      <ModalProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </ModalProvider>
    </RegistrationStoreProvider>
  </DiProvider>
);
