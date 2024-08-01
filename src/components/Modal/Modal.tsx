import { ReactNode, useEffect, MouseEvent } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { KEY_ESCAPE, KEYDOWN_EVENT_NAME } from '~/constants';

import * as S from './styles';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  content: ReactNode;
}

export const Modal = ({ onClose, isOpen, content }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === KEY_ESCAPE) {
        onClose();
      }
    };
    document.addEventListener(KEYDOWN_EVENT_NAME, handleEscape);
    return () => {
      document.removeEventListener(KEYDOWN_EVENT_NAME, handleEscape);
    };
  }, [onClose]);

  function handleClickOverlay(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={handleClickOverlay}>
      <S.Card>
        <S.CloseButton onClick={() => onClose()}>
          <HiOutlineX />
        </S.CloseButton>
        <S.Content>{content}</S.Content>
      </S.Card>
    </S.Overlay>
  );
};
