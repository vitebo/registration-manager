import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Cpf, RegistrationStatusEnum } from '~/entities';
import { useRegistration } from '~/hooks';
import { routes } from '~/router';

import { SearchBar, Collumns, Column, RegistrationCard } from './components';
import * as S from './styles';

const allColumns = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado' }
];

export const Dashboard = () => {
  const {
    registrations,
    isLoading,
    fetchRegistrations,
    reproveRegistration,
    reviewRegistration,
    deleteRegistration,
    approveRegistration
  } = useRegistration();

  const history = useHistory();

  useEffect(() => {
    fetchRegistrations().then();
  }, []);

  const handleRefreshRegistrations = useCallback(async () => {
    await fetchRegistrations();
  }, [fetchRegistrations]);

  const handleValidCpf = useCallback(
    async (cpf: Cpf) => {
      await fetchRegistrations(cpf).then();
    },
    [fetchRegistrations]
  );

  const handleGoToNewAdmissionPage = useCallback(() => {
    history.push(routes.newUser);
  }, [history]);

  return (
    <S.Container>
      <SearchBar
        onClickRefresh={handleRefreshRegistrations}
        onValidCpf={handleValidCpf}
        onGoToNewAdmissionPage={handleGoToNewAdmissionPage}
      />
      <Collumns>
        {allColumns.map((collum) => (
          <Column key={collum.status} status={collum.status} title={collum.title} isLoading={isLoading}>
            {registrations
              .filter((registration) => registration.status.value === collum.status)
              .map((registration) => {
                return (
                  <RegistrationCard
                    registration={registration}
                    key={registration.id}
                    onApprove={() => approveRegistration(registration)}
                    onReprove={() => reproveRegistration(registration)}
                    onReview={() => reviewRegistration(registration)}
                    onDelete={() => deleteRegistration(registration)}
                  />
                );
              })}
          </Column>
        ))}
      </Collumns>
    </S.Container>
  );
};
