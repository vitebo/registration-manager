import { createContext } from 'react';

import { RegistrationGatewayMemory, RegistrationGateway } from '~/gateways';

interface DiContextValue {
  registrationGateway: RegistrationGateway;
}

export const DiContext = createContext<DiContextValue>({
  registrationGateway: new RegistrationGatewayMemory()
});
