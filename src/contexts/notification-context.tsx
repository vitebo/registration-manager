import { createContext, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import { NotificationList, NotificationItem, NotificationType } from '~/components/Notification';
import { NOTIFICATION_ROOT_ELEMENT_ID, NOTIFICATION_DURATION_IN_MS } from '~/constants.ts';

interface NotificationData {
  message: string;
  type: NotificationType;
  id: number;
}

interface NotificationContextValue {
  addNotification: (notification: Omit<NotificationData, 'id'>) => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationContext = createContext<NotificationContextValue>({
  addNotification: () => {}
});

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  function addNotification({ message, type }: Omit<NotificationData, 'id'>) {
    const id = Date.now();
    setNotifications([...notifications, { message, type, id }]);
    setTimeout(() => {
      closeNotification(id);
    }, NOTIFICATION_DURATION_IN_MS);
  }

  function closeNotification(id: number) {
    setNotifications(notifications.filter((n) => n.id !== id));
  }

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {createPortal(
        <NotificationList>
          {notifications.map(({ message, type, id }) => (
            <NotificationItem key={id} message={message} type={type} onClose={() => closeNotification(id)} />
          ))}
        </NotificationList>,
        document.getElementById(NOTIFICATION_ROOT_ELEMENT_ID) as HTMLElement
      )}
    </NotificationContext.Provider>
  );
};
