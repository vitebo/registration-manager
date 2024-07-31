import { createContext, useState } from 'react';

import { Registration } from '~/entities';

interface StoreContextValue {
  registrations: Registration[];
  setRegistrations: (registrations: Registration[]) => void;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextValue>({
  registrations: [],
  setRegistrations: () => {}
});

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  return <StoreContext.Provider value={{ registrations, setRegistrations }}>{children}</StoreContext.Provider>;
};
