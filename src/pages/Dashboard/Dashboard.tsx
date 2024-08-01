import { useEffect, useContext } from 'react';

import { RegistrationStoreContext } from '~/contexts';

import { SearchBar, Collumns } from './components';
import * as S from './styles';

export const Dashboard = () => {
  const { registrations, fetchAllRegistrations, isLoading } = useContext(RegistrationStoreContext);

  useEffect(() => {
    fetchAllRegistrations().then();
  }, [fetchAllRegistrations]);

  async function handleRefreshRegistrations() {
    await fetchAllRegistrations();
  }

  return (
    <S.Container>
      <SearchBar onClickRefresh={handleRefreshRegistrations} />
      {isLoading ? <p>Loading</p> : <Collumns registrations={registrations} />}
    </S.Container>
  );
};
