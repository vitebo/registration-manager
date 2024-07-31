import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { ROOT_ELEMENT_ID } from '~/constants';
import { DiContext } from '~/contexts';
import { HttpClientFetch } from '~/drivers';
import { RegistrationGatewayHttp } from '~/gateways';
import '~/index.css';

const provide = {
  registrationGateway: new RegistrationGatewayHttp(new HttpClientFetch())
};

createRoot(document.getElementById(ROOT_ELEMENT_ID)!).render(
  <DiContext.Provider value={provide}>
    <App />
  </DiContext.Provider>
);
