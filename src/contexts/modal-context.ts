import type { ReactNode } from 'react';
import { createContext } from 'react';

interface ModalContextValue {
  isModalOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode;
}

export const ModalContext = createContext<ModalContextValue>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: null
});
