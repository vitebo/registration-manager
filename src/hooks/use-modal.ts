import type { ReactNode } from 'react';
import { useState } from 'react';

export function useModal() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>("I'm the Modal Content");

  function handleModal(content: ReactNode) {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  }

  return { modal, handleModal, modalContent };
}
