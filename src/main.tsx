import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/index.css';
import { RegistrationGatewayHttp } from '~/gateways/registration-gateway-http';
import { DiContext } from '~/contexts/di-context';
import { HttpClientFetch } from '~/drivers/http-client-fetch';

const provide = {
  registrationGateway: new RegistrationGatewayHttp(new HttpClientFetch())
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DiContext.Provider value={provide}>
    <App />
  </DiContext.Provider>
);
