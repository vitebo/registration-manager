import { useContext, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { RegistrationStoreContext } from '~/contexts';
import { Cpf } from '~/entities';
import { routes } from '~/router';

import { SearchBar, Collumns } from './components';
import * as S from './styles';

export const Dashboard = () => {
  const { registrations, fetchAllRegistrations, findRegistrationByCpf, isLoading } =
    useContext(RegistrationStoreContext);

  const history = useHistory();

  useEffect(() => {
    fetchAllRegistrations().then();
  }, [fetchAllRegistrations]);

  const handleRefreshRegistrations = useCallback(async () => {
    await fetchAllRegistrations();
  }, [fetchAllRegistrations]);

  const handleValidCpf = useCallback(
    async (cpf: string) => {
      if (cpf) {
        return await findRegistrationByCpf(new Cpf(cpf)).then();
      }
      await fetchAllRegistrations();
    },
    [fetchAllRegistrations, findRegistrationByCpf]
  );

  const handleGoToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <SearchBar
        onClickRefresh={handleRefreshRegistrations}
        onValidCpf={handleValidCpf}
        onGoToNewAdmissionPage={handleGoToNewAdmissionPage}
      />
      {isLoading ? <p>Loading</p> : <Collumns registrations={registrations} />}
    </S.Container>
  );
};
