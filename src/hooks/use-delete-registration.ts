import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { NotificationType } from '~/components/Notification';
import { DiContext, ModalContext, NotificationContext, StoreContext } from '~/contexts';
import { Registration } from '~/entities';

export function useDeleteRegistration() {
  const { registrationGateway } = useContext(DiContext);
  const { registrations, setRegistrations } = useContext(StoreContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNotification } = useContext(NotificationContext);

  return async function deleteRegistration(registration: Registration) {
    openModal(
      Confirm({
        title: 'Excluir cadastro',
        message: `Deseja realmente excluir o cadastro de ${registration.employeeName.value}?`,
        onConfirm: async () => {
          try {
            await registrationGateway.delete(registration);
            const newRegistrations = registrations.filter((r) => r.id !== registration.id);
            setRegistrations(newRegistrations);
            addNotification({
              type: NotificationType.SUCCESS,
              message: 'Cadastro excluído com sucesso!'
            });
          } catch (error) {
            addNotification({
              type: NotificationType.ERROR,
              message: 'Ocorreu um erro ao excluir o cadastro, tente novamente mais tarde.'
            });
          } finally {
            closeModal();
          }
        },
        onCancel: () => closeModal()
      })
    );
  };
}
