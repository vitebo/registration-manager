import type { ReactNode } from 'react';
import { createContext } from 'react';

interface ModalContextValue {
  modal: boolean;
  handleModal: (content?: ReactNode) => void;
  modalContent: ReactNode;
}

export const ModalContext = createContext<ModalContextValue>({
  modal: false,
  handleModal: () => {},
  modalContent: null
});
