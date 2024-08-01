import { ReactNode, useState, createContext } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '~/components/Modal';
import { MODAL_ROOT_ELEMENT_ID } from '~/constants.ts';

interface ModalContextValue {
  isModalOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextValue>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: null
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  function openModal(content: ReactNode) {
    setModalContent(content);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalContent(null);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, closeModal, openModal, modalContent }}>
      {children}
      {createPortal(
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />,
        document.getElementById(MODAL_ROOT_ELEMENT_ID) as HTMLElement
      )}
    </ModalContext.Provider>
  );
};
