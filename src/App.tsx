import { useState } from 'react'
import Router from "~/router";
import { Header } from "./components/Header";
import { StoreContext } from '~/contexts/store-context'
import { Registration } from '~/entities/registration'

function App() {
    const [registrations, setRegistrations] = useState<Registration[]>([])

  return (
    <StoreContext.Provider value={{ registrations, setRegistrations }}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </StoreContext.Provider>
  );
}

export default App;
