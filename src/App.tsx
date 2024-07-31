import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Header } from '~/components/Header';
import { Modal } from '~/components/Modal';
import { MODAL_ROOT_ELEMENT_ID } from '~/constants';
import { StoreContext, ModalContext } from '~/contexts';
import { Registration } from '~/entities';
import { useModal } from '~/hooks';
import { Router } from '~/router';

export function App() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const { modal, handleModal, modalContent } = useModal();

  return (
    <StoreContext.Provider value={{ registrations, setRegistrations }}>
      <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
        <Header>
          <h1>Caju Front Teste</h1>
        </Header>
        <Router />
        {createPortal(<Modal />, document.getElementById(MODAL_ROOT_ELEMENT_ID) as HTMLElement)}
      </ModalContext.Provider>
    </StoreContext.Provider>
  );
}
