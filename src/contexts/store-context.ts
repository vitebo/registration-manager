import { createContext } from 'react';
import { Registration } from '~/entities/registration';

interface StoreContextValue {
  registrations: Registration[];
  setRegistrations: (registrations: Registration[]) => void;
}

export const StoreContext = createContext<StoreContextValue>({
  registrations: [],
  setRegistrations: () => {}
});
