import { createContext, ReactNode, useContext, useState, useCallback } from 'react';

import { DiContext } from '~/contexts';
import { Cpf, Registration } from '~/entities';

interface RegistrationStoreContextValue {
  registrations: Registration[];
  isLoading: boolean;
  fetchAllRegistrations: () => Promise<void>;
  approveRegistration: (registration: Registration) => Promise<void>;
  reproveRegistration: (registration: Registration) => Promise<void>;
  reviewRegistration: (registration: Registration) => Promise<void>;
  deleteRegistration: (registration: Registration) => Promise<void>;
  createRegistration: (registration: Registration) => Promise<void>;
  findRegistrationByCpf: (cpf: Cpf) => Promise<void>;
}

interface RegistrationStoreProviderProps {
  children: ReactNode;
}

export const RegistrationStoreContext = createContext<RegistrationStoreContextValue>({
  registrations: [],
  isLoading: false,
  fetchAllRegistrations: () => Promise.resolve(),
  approveRegistration: () => Promise.resolve(),
  reproveRegistration: () => Promise.resolve(),
  reviewRegistration: () => Promise.resolve(),
  deleteRegistration: () => Promise.resolve(),
  createRegistration: () => Promise.resolve(),
  findRegistrationByCpf: () => Promise.resolve()
});

export const RegistrationStoreProvider = ({ children }: RegistrationStoreProviderProps) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { registrationGateway } = useContext(DiContext);

  const updateRegistration = useCallback(
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

  async function executeWithLoading<T>(action: () => Promise<T>): Promise<T> {
    setIsLoading(true);
    const value = await action();
    setIsLoading(false);
    return value;
  }

  const fetchAllRegistrations = useCallback(async () => {
    setRegistrations([]);
    const registrations = await executeWithLoading(() => registrationGateway.getAll());
    setRegistrations(registrations);
  }, [registrationGateway]);

  const approveRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.approve();
      await executeWithLoading(() => updateRegistration(registration));
    },
    [updateRegistration]
  );

  const reproveRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.reprove();
      await executeWithLoading(() => updateRegistration(registration));
    },
    [updateRegistration]
  );

  const reviewRegistration = useCallback(
    async (registration: Registration) => {
      registration.status.review();
      await executeWithLoading(() => updateRegistration(registration));
    },
    [updateRegistration]
  );

  const deleteRegistration = useCallback(
    async (registration: Registration) => {
      await executeWithLoading(() => registrationGateway.delete(registration));
      setRegistrations(registrations.filter((reg) => reg.id !== registration.id));
    },
    [registrationGateway, registrations]
  );

  const createRegistration = useCallback(
    async (registration: Registration) => {
      const updatedRegistration = await executeWithLoading(() => registrationGateway.create(registration));
      setRegistrations([...registrations, updatedRegistration]);
    },
    [registrationGateway, registrations]
  );

  const findRegistrationByCpf = useCallback(
    async (cpf: Cpf) => {
      setRegistrations([]);
      const registration = await executeWithLoading(() => registrationGateway.findByCpf(cpf));
      if (registration) {
        setRegistrations([registration]);
      }
    },
    [registrationGateway]
  );

  return (
    <RegistrationStoreContext.Provider
      value={{
        registrations,
        isLoading,
        approveRegistration,
        createRegistration,
        deleteRegistration,
        fetchAllRegistrations,
        reproveRegistration,
        reviewRegistration,
        findRegistrationByCpf
      }}
    >
      {children}
    </RegistrationStoreContext.Provider>
  );
};
