import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { APP_ROOT_ELEMENT_ID } from '~/constants';
import { DiProvider } from '~/contexts';
import { HttpClientFetch } from '~/drivers';
import { RegistrationGatewayHttp } from '~/gateways';

const httpCLient = new HttpClientFetch();

const diProvide = {
  registrationGateway: new RegistrationGatewayHttp(httpCLient)
};

createRoot(document.getElementById(APP_ROOT_ELEMENT_ID)!).render(
  <DiProvider provide={diProvide}>
    <App />
  </DiProvider>
);
