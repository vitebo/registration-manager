import { createContext, ReactNode, useContext, useState } from 'react';

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

  async function executeWithLoading<T>(action: () => Promise<T>): Promise<T> {
    setIsLoading(true);
    const value = await action();
    setIsLoading(false);
    return value;
  }

  async function updateRegistration(registration: Registration) {
    const updatedRegistration = await registrationGateway.update(registration);
    setRegistrations(
      registrations.map((registration) =>
        registration.id === updatedRegistration.id ? updatedRegistration : registration
      )
    );
  }

  async function fetchAllRegistrations() {
    setRegistrations([]);
    const registrations = await executeWithLoading(() => registrationGateway.getAll());
    setRegistrations(registrations);
  }

  async function approveRegistration(registration: Registration) {
    registration.status.approve();
    await executeWithLoading(() => updateRegistration(registration));
  }

  async function reproveRegistration(registration: Registration) {
    registration.status.reprove();
    await executeWithLoading(() => updateRegistration(registration));
  }

  async function reviewRegistration(registration: Registration) {
    registration.status.review();
    await executeWithLoading(() => updateRegistration(registration));
  }

  async function deleteRegistration(registration: Registration) {
    await executeWithLoading(() => registrationGateway.delete(registration));
    setRegistrations(registrations.filter((reg) => reg.id !== registration.id));
  }

  async function createRegistration(registration: Registration) {
    const updatedRegistration = await executeWithLoading(() => registrationGateway.create(registration));
    setRegistrations([...registrations, updatedRegistration]);
  }

  async function findRegistrationByCpf(cpf: Cpf) {
    setRegistrations([]);
    const registration = await executeWithLoading(() => registrationGateway.findByCpf(cpf));
    if (registration) {
      setRegistrations([registration]);
    }
  }

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
