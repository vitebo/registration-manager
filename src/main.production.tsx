import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { APP_ROOT_ELEMENT_ID } from '~/constants';
import { DiProvider } from '~/contexts';
import { StorageLocal } from '~/drivers';
import { RegistrationGatewayStorage } from '~/gateways';

const storageLocal = new StorageLocal('registration-manager');
const DELAY = 500;

const diProvide = {
  registrationGateway: new RegistrationGatewayStorage(storageLocal, DELAY)
};

createRoot(document.getElementById(APP_ROOT_ELEMENT_ID)!).render(
  <DiProvider provide={diProvide}>
    <App />
  </DiProvider>
);
