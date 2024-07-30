import { useContext } from 'react';

import { DiContext, StoreContext } from '~/contexts';
import { Registration } from '~/entities';

export function useDeleteRegistration() {
  const { registrationGateway } = useContext(DiContext);
  const { registrations, setRegistrations } = useContext(StoreContext);

  return async function updateState(registration: Registration) {
    await registrationGateway.delete(registration);
    const newRegistrations = registrations.filter((r) => r.id !== registration.id);
    setRegistrations(newRegistrations);
  };
}
