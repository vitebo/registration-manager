import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { APP_ROOT_ELEMENT_ID } from '~/constants';
import { DiProvider } from '~/contexts';
import { RegistrationGatewayMemory } from '~/gateways';

const diProvide = {
  registrationGateway: new RegistrationGatewayMemory()
};

createRoot(document.getElementById(APP_ROOT_ELEMENT_ID)!).render(
  <DiProvider provide={diProvide}>
    <App />
  </DiProvider>
);
