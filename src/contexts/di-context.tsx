import { createContext, ReactNode } from 'react';

import { RegistrationGateway, RegistrationGatewayMemory } from '~/gateways';

interface DiContextValue {
  registrationGateway: RegistrationGateway;
}

interface DiProviderProps {
  children: ReactNode;
  provide: DiContextValue;
}

export const DiContext = createContext<DiContextValue>({
  registrationGateway: new RegistrationGatewayMemory()
});

export const DiProvider = ({ provide, children }: DiProviderProps) => {
  return <DiContext.Provider value={provide}>{children}</DiContext.Provider>;
};
