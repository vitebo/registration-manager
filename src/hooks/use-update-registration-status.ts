import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { DiContext, ModalContext, StoreContext } from '~/contexts';
import { Registration } from '~/entities';
import { replaceByKey } from '~/utils';

interface ConfirmActionInput {
  registration: Registration;
  title: string;
  message: string;
  action: () => void;
}

export function useUpdateRegistrationStatus() {
  const { registrationGateway } = useContext(DiContext);
  const { registrations, setRegistrations } = useContext(StoreContext);
  const { openModal, closeModal } = useContext(ModalContext);

  function confirmAction({ registration, title, message, action }: ConfirmActionInput) {
    openModal(
      Confirm({
        title,
        message,
        onConfirm: async () => {
          action();
          const updatedRegistration = await registrationGateway.update(registration);
          const newRegistrations = replaceByKey(registrations, 'id', updatedRegistration);
          setRegistrations(newRegistrations);
          closeModal();
        },
        onCancel: () => closeModal()
      })
    );
  }

  return {
    reprove: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Reprovar cadastro`,
        message: `Deseja realmente reprovar o cadastro de ${registration.employeeName.value}?`,
        action: () => registration.status.reprove()
      });
    },
    approve: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Aprovar cadastro`,
        message: `Deseja realmente aprovar o cadastro de ${registration.employeeName.value}?`,
        action: () => registration.status.approve()
      });
    },
    review: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Mover cadastro para revisão`,
        message: `Deseja realmente mover o cadastro de ${registration.employeeName.value} para revisão?`,
        action: () => registration.status.review()
      });
    }
  };
}
