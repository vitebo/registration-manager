import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { DiContext, ModalContext, StoreContext } from '~/contexts';
import { Registration } from '~/entities';

export function useDeleteRegistration() {
  const { registrationGateway } = useContext(DiContext);
  const { registrations, setRegistrations } = useContext(StoreContext);
  const { openModal, closeModal } = useContext(ModalContext);

  return async function deleteRegistration(registration: Registration) {
    openModal(
      Confirm({
        title: 'Excluir cadastro',
        message: `Deseja realmente excluir o cadastro de ${registration.employeeName.value}?`,
        onConfirm: async () => {
          await registrationGateway.delete(registration);
          const newRegistrations = registrations.filter((r) => r.id !== registration.id);
          setRegistrations(newRegistrations);
          closeModal();
        },
        onCancel: () => closeModal()
      })
    );
  };
}
