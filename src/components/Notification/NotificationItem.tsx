import { HiOutlineX } from 'react-icons/hi';

import * as S from './styles';
import { CloseButton } from './styles';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error'
}

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose?: () => void;
}

export const NotificationItem = ({ message, type, onClose }: NotificationProps) => {
  return (
    <S.Item type={type} role="alert">
      <S.Message>{message}</S.Message>
      <CloseButton onClick={onClose}>
        <HiOutlineX />
      </CloseButton>
    </S.Item>
  );
};
