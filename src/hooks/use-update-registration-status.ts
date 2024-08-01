import { useContext } from 'react';

import { Confirm } from '~/components/Confirm';
import { NotificationType } from '~/components/Notification';
import { ModalContext, NotificationContext, RegistrationStoreContext } from '~/contexts';
import { Registration } from '~/entities';

interface ConfirmActionInput {
  registration: Registration;
  title: string;
  message: string;
  action: () => Promise<void>;
}

export function useUpdateRegistrationStatus() {
  const { approveRegistration, reproveRegistration, reviewRegistration } = useContext(RegistrationStoreContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNotification } = useContext(NotificationContext);

  function confirmAction({ title, message, action }: ConfirmActionInput) {
    openModal(
      Confirm({
        title,
        message,
        onConfirm: async () => {
          try {
            await action();
            addNotification({
              type: NotificationType.SUCCESS,
              message: 'Cadastro atualizado com sucesso'
            });
          } catch (error) {
            addNotification({
              type: NotificationType.ERROR,
              message: 'Erro ao atualizar cadastro'
            });
          } finally {
            closeModal();
          }
        },
        onCancel: () => {
          closeModal();
        }
      })
    );
  }

  return {
    reprove: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Reprovar cadastro`,
        message: `Deseja realmente reprovar o cadastro de ${registration.employeeName.value}?`,
        action: () => reproveRegistration(registration)
      });
    },
    approve: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Aprovar cadastro`,
        message: `Deseja realmente aprovar o cadastro de ${registration.employeeName.value}?`,
        action: () => approveRegistration(registration)
      });
    },
    review: async (registration: Registration) => {
      confirmAction({
        registration,
        title: `Mover cadastro para revisão`,
        message: `Deseja realmente mover o cadastro de ${registration.employeeName.value} para revisão?`,
        action: () => reviewRegistration(registration)
      });
    }
  };
}
