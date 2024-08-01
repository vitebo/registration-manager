import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { NotificationType } from '~/components/Notification';
import { ActionStatus } from '~/constants';
import { ModalContext, NotificationContext, RegistrationStoreContext } from '~/contexts';
import { Registration } from '~/entities';

export function useCreateRegistration() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNotification } = useContext(NotificationContext);
  const { createRegistration } = useContext(RegistrationStoreContext);

  return async (registration: Registration) => {
    return new Promise<ActionStatus>((resolve) => {
      openModal(
        Confirm({
          title: 'Criar cadastro',
          message: `Deseja realmente criar o cadastro de ${registration.employeeName.value}?`,
          onConfirm: async () => {
            try {
              await createRegistration(registration);
              addNotification({
                type: NotificationType.SUCCESS,
                message: 'Cadastro criado com sucesso!'
              });
              resolve(ActionStatus.SUCCESS);
            } catch (error) {
              addNotification({
                type: NotificationType.ERROR,
                message: 'Ocorreu um erro ao criar o cadastro, tente novamente mais tarde.'
              });
              resolve(ActionStatus.ERROR);
            } finally {
              closeModal();
            }
          },
          onCancel: () => {
            closeModal();
            resolve(ActionStatus.CANCELED);
          }
        })
      );
    });
  };
}
