import { ReactNode } from 'react';

import * as S from './styles';

interface NotificationListProps {
  children: ReactNode;
}

export const NotificationList = ({ children }: NotificationListProps) => {
  return <S.Container>{children}</S.Container>;
};
