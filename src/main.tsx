import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/index.css';
import { RegistrationGatewayMemory } from '~/gateways/registration-gateway-memory.ts';
import { DiContext } from '~/contexts/di-context';

const provide = {
  registrationGateway: new RegistrationGatewayMemory()
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DiContext.Provider value={provide}>
    <App />
  </DiContext.Provider>
);
