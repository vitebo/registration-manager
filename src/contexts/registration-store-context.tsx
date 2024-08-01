import { createContext, ReactNode, useContext, useState, useCallback } from 'react';

import { DiContext } from '~/contexts';
import { Registration } from '~/entities';

interface RegistrationStoreContextValue {
  registrations: Registration[];
  fetchAllRegistrations: () => Promise<void>;
  approveRegistration: (registration: Registration) => Promise<void>;
  reproveRegistration: (registration: Registration) => Promise<void>;
  reviewRegistration: (registration: Registration) => Promise<void>;
  deleteRegistration: (registration: Registration) => Promise<void>;
  createRegistration: (registration: Registration) => Promise<void>;
}

interface RegistrationStoreProviderProps {
  children: ReactNode;
}

export const RegistrationStoreContext = createContext<RegistrationStoreContextValue>({
  registrations: [],
  fetchAllRegistrations: () => Promise.resolve(),
  approveRegistration: () => Promise.resolve(),
  reproveRegistration: () => Promise.resolve(),
  reviewRegistration: () => Promise.resolve(),
  deleteRegistration: () => Promise.resolve(),
  createRegistration: () => Promise.resolve()
});

export const RegistrationStoreProvider = ({ children }: RegistrationStoreProviderProps) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  const { registrationGateway } = useContext(DiContext);

  const _updateRegistration = useCallback(
    async (registration: Registration) => {
      const updatedRegistration = await registrationGateway.update(registration);
      setRegistrations(
        registrations.map((registration) =>
          registration.id === updatedRegistration.id ? updatedRegistration : registration
        )
      );
    },
    [registrationGateway, registrations]
  );

  const fetchAllRegistrations = useCallback(async () => {
    setRegistrations([]);
    const registrations = await registrationGateway.get();
    setRegistrations(registrations);
  }, [registrationGateway]);

  const approveRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.approve();
      await _updateRegistration(registration);
    },
    [_updateRegistration]
  );

  const reproveRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.reprove();
      await _updateRegistration(registration);
    },
    [_updateRegistration]
  );

  const reviewRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.review();
      await _updateRegistration(registration);
    },
    [_updateRegistration]
  );

  const deleteRegistration = useCallback(
    async (registration: Registration) => {
      await registrationGateway.delete(registration);
      setRegistrations(registrations.filter((reg) => reg.id !== registration.id));
    },
    [registrationGateway, registrations]
  );

  const createRegistration = useCallback(
    async (registration: Registration) => {
      const updatedRegistration = await registrationGateway.create(registration);
      setRegistrations([...registrations, updatedRegistration]);
    },
    [registrationGateway, registrations]
  );

  return (
    <RegistrationStoreContext.Provider
      value={{
        registrations,
        approveRegistration,
        createRegistration,
        deleteRegistration,
        fetchAllRegistrations,
        reproveRegistration,
        reviewRegistration
      }}
    >
      {children}
    </RegistrationStoreContext.Provider>
  );
};
