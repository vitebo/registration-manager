import { useContext, useCallback } from 'react';

import { Confirm } from '~/components/Confirm';
import { NotificationType } from '~/components/Notification';
import { ModalContext, NotificationContext, RegistrationStoreContext } from '~/contexts';
import { Cpf, Registration } from '~/entities';

interface ConfirmActionInput {
  modalTitle: string;
  modalMessage: string;
  notificationSuccessMessage: string;
  notificationErrorMessage: string;
  action: () => Promise<void>;
}

interface NotifyActionInput {
  notificationSuccessMessage: string;
  notificationErrorMessage: string;
  action: () => Promise<void>;
}

export function useRegistration() {
  const {
    registrations,
    isLoading,
    approveRegistration,
    reproveRegistration,
    reviewRegistration,
    deleteRegistration,
    createRegistration,
    fetchAllRegistrations,
    findRegistrationByCpf
  } = useContext(RegistrationStoreContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNotification } = useContext(NotificationContext);

  enum ActionStatus {
    CANCELED = 'canceled',
    SUCCESS = 'success',
    ERROR = 'error'
  }

  const confirmAction = useCallback(
    ({
      modalTitle,
      modalMessage,
      action,
      notificationSuccessMessage,
      notificationErrorMessage
    }: ConfirmActionInput) => {
      return new Promise((resolve) =>
        openModal(
          Confirm({
            title: modalTitle,
            message: modalMessage,
            onConfirm: async () => {
              action()
                .then(() => {
                  addNotification({
                    type: NotificationType.SUCCESS,
                    message: notificationSuccessMessage
                  });
                  resolve(ActionStatus.SUCCESS);
                })
                .catch(() => {
                  addNotification({
                    type: NotificationType.ERROR,
                    message: notificationErrorMessage
                  });
                  resolve(ActionStatus.ERROR);
                })
                .finally(() => {
                  closeModal();
                });
            },
            onCancel: () => {
              closeModal();
              resolve(ActionStatus.CANCELED);
            }
          })
        )
      );
    },
    [ActionStatus.CANCELED, ActionStatus.ERROR, ActionStatus.SUCCESS, addNotification, closeModal, openModal]
  );

  const notifyAction = useCallback(
    ({ notificationSuccessMessage, notificationErrorMessage, action }: NotifyActionInput) => {
      return new Promise((resolve) => {
        action()
          .then(() => {
            addNotification({
              type: NotificationType.SUCCESS,
              message: notificationSuccessMessage
            });
            resolve(ActionStatus.SUCCESS);
          })
          .catch(() => {
            addNotification({
              type: NotificationType.ERROR,
              message: notificationErrorMessage
            });
            resolve(ActionStatus.ERROR);
          });
      });
    },
    [ActionStatus.ERROR, ActionStatus.SUCCESS, addNotification]
  );

  return {
    registrations,
    isLoading,
    ActionStatus,
    reproveRegistration: useCallback(
      async (registration: Registration) => {
        return confirmAction({
          modalTitle: `Reprovar cadastro`,
          modalMessage: `Deseja realmente reprovar o cadastro de ${registration.employeeName.value}?`,
          notificationErrorMessage: 'Ocorreu um erro ao reprovar o cadastro, tente novamente mais tarde.',
          notificationSuccessMessage: 'Cadastro reprovado com sucesso!',
          action: () => reproveRegistration(registration)
        });
      },
      [confirmAction, reproveRegistration]
    ),
    approveRegistration: useCallback(
      async (registration: Registration) => {
        return confirmAction({
          modalTitle: `Aprovar cadastro`,
          modalMessage: `Deseja realmente aprovar o cadastro de ${registration.employeeName.value}?`,
          notificationErrorMessage: 'Ocorreu um erro ao aprovar o cadastro, tente novamente mais tarde.',
          notificationSuccessMessage: 'Cadastro aprovado com sucesso!',
          action: () => approveRegistration(registration)
        });
      },
      [approveRegistration, confirmAction]
    ),
    reviewRegistration: useCallback(
      async (registration: Registration) => {
        return confirmAction({
          modalTitle: `Mover cadastro para revisão`,
          modalMessage: `Deseja realmente mover o cadastro de ${registration.employeeName.value} para revisão?`,
          notificationErrorMessage: 'Ocorreu um erro ao mover o cadastro para revisão, tente novamente mais tarde.',
          notificationSuccessMessage: 'Cadastro movido para revisão com sucesso!',
          action: () => reviewRegistration(registration)
        });
      },
      [confirmAction, reviewRegistration]
    ),
    deleteRegistration: useCallback(
      (registration: Registration) => {
        return confirmAction({
          modalTitle: `Excluir cadastro`,
          modalMessage: `Deseja realmente excluir o cadastro de ${registration.employeeName.value}?`,
          notificationErrorMessage: 'Ocorreu um erro ao excluir o cadastro, tente novamente mais tarde.',
          notificationSuccessMessage: 'Cadastro excluído com sucesso!',
          action: () => deleteRegistration(registration)
        });
      },
      [confirmAction, deleteRegistration]
    ),
    createRegistration: useCallback(
      (registration: Registration) => {
        return confirmAction({
          modalTitle: 'Criar cadastro',
          modalMessage: `Deseja realmente criar o cadastro de ${registration.employeeName.value}?`,
          notificationErrorMessage: 'Ocorreu um erro ao criar o cadastro, tente novamente mais tarde.',
          notificationSuccessMessage: 'Cadastro criado com sucesso!',
          action: () => createRegistration(registration)
        });
      },
      [confirmAction, createRegistration]
    ),
    fetchRegistrations: useCallback(
      async (cpf?: Cpf) => {
        return notifyAction({
          notificationSuccessMessage: 'Busca realizada com sucesso',
          notificationErrorMessage: 'Erro ao buscar cadastros',
          action: async () => {
            if (cpf) {
              await findRegistrationByCpf(cpf);
            } else {
              await fetchAllRegistrations();
            }
          }
        });
      },
      [fetchAllRegistrations, findRegistrationByCpf, notifyAction]
    )
  };
}
