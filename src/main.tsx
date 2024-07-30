import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { DiContext } from '~/contexts';
import { HttpClientFetch } from '~/drivers';
import { RegistrationGatewayHttp } from '~/gateways';
import '~/index.css';

const provide = {
  registrationGateway: new RegistrationGatewayHttp(new HttpClientFetch())
};

createRoot(document.getElementById('root')!).render(
  <DiContext.Provider value={provide}>
    <App />
  </DiContext.Provider>
);
