import { useEffect, useContext } from 'react';

import { DiContext, StoreContext } from '~/contexts';

import { SearchBar, Collumns } from './components';
import * as S from './styles';

export const Dashboard = () => {
  const { registrations, setRegistrations } = useContext(StoreContext);
  const { registrationGateway } = useContext(DiContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const registrations = await registrationGateway.get();
      setRegistrations(registrations);
    };
    fetchRegistrations();
  }, [registrationGateway, setRegistrations]);

  async function handleRefreshRegistrations() {
    const newRegistrations = await registrationGateway.get();
    setRegistrations(newRegistrations);
  }

  return (
    <S.Container>
      <SearchBar onClickRefresh={handleRefreshRegistrations} />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
