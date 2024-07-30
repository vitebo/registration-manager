import { useState } from 'react';

import { Header } from '~/components/Header';
import { StoreContext } from '~/contexts';
import { Registration } from '~/entities';
import { Router } from '~/router';

export function App() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  return (
    <StoreContext.Provider value={{ registrations, setRegistrations }}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </StoreContext.Provider>
  );
}
