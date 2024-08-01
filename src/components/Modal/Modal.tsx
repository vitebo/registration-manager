import { ReactNode, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import * as S from './styles';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  content: ReactNode;
}

export const Modal = ({ onClose, isOpen, content }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  function handleClickOverlay(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
