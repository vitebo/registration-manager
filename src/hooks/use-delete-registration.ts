import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { NotificationType } from '~/components/Notification';
import { ModalContext, NotificationContext, RegistrationStoreContext } from '~/contexts';
import { Registration } from '~/entities';

export function useDeleteRegistration() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNotification } = useContext(NotificationContext);
  const { deleteRegistration } = useContext(RegistrationStoreContext);

  return async (registration: Registration) => {
    openModal(
      Confirm({
        title: 'Excluir cadastro',
        message: `Deseja realmente excluir o cadastro de ${registration.employeeName.value}?`,
        onConfirm: async () => {
          try {
            await deleteRegistration(registration);
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
