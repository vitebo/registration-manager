import { useEffect, useContext } from 'react';

import { RegistrationStoreContext } from '~/contexts';

import { SearchBar, Collumns } from './components';
import * as S from './styles';

export const Dashboard = () => {
  const { registrations, fetchAllRegistrations } = useContext(RegistrationStoreContext);

  useEffect(() => {
    fetchAllRegistrations().then();
  }, [fetchAllRegistrations]);

  async function handleRefreshRegistrations() {
    await fetchAllRegistrations();
  }

  return (
    <S.Container>
      <SearchBar onClickRefresh={handleRefreshRegistrations} />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
