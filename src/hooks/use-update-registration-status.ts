import { useContext } from 'react';

import { DiContext, StoreContext } from '~/contexts';
import { Registration } from '~/entities';
import { replaceByKey } from '~/utils';

export function useUpdateRegistrationStatus() {
  const { registrationGateway } = useContext(DiContext);
  const { registrations, setRegistrations } = useContext(StoreContext);

  async function updateState(registration: Registration) {
    const updatedRegistration = await registrationGateway.update(registration);
    const newRegistrations = replaceByKey(registrations, 'id', updatedRegistration);
    setRegistrations(newRegistrations);
  }

  return {
    reprove: async (registration: Registration) => {
      registration.status.reprove();
      await updateState(registration);
    },
    approve: async (registration: Registration) => {
      registration.status.approve();
      await updateState(registration);
    },
    review: async (registration: Registration) => {
      registration.status.review();
      await updateState(registration);
    }
  };
}
