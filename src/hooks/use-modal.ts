import type { ReactNode } from 'react';
import { useState } from 'react';

export function useModal() {
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

  return { isModalOpen, openModal, closeModal, modalContent };
}
