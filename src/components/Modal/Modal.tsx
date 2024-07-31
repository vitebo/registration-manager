import { useContext, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { ModalContext } from '~/contexts';

import * as S from './styles';

export const Modal = () => {
  const { modalContent, modal, handleModal } = useContext(ModalContext);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function handleClickOverlay(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      handleModal();
    }
  }

  if (!modal) return null;

  return (
    <S.Overlay onClick={handleClickOverlay}>
      <S.Card>
        <S.CloseButton onClick={() => handleModal()}>
          <HiOutlineX />
        </S.CloseButton>
        <S.Content>{modalContent}</S.Content>
      </S.Card>
    </S.Overlay>
  );
};
