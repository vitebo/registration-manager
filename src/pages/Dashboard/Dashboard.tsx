import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Cpf, RegistrationStatusEnum } from '~/entities';
import { useRegistration } from '~/hooks';
import { routes } from '~/router';

import { SearchBar, Collumns, Column, RegistrationCard } from './components';
import * as S from './styles';

const allColumns = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar', labelledby: 'registrations-in-review' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado', labelledby: 'registrations-approved' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado', labelledby: 'registrations-reproved' }
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRefreshRegistrations = useCallback(async () => {
    await fetchRegistrations();
  }, [fetchRegistrations]);

  const handleValidCpf = useCallback(
    async (cpf: Cpf) => {
      await fetchRegistrations(cpf);
    },
    [fetchRegistrations]
  );

  const handleCleanCpf = useCallback(async () => {
    await fetchRegistrations();
  }, [fetchRegistrations]);

  const handleGoToNewAdmissionPage = useCallback(() => {
    history.push(routes.newUser);
  }, [history]);

  return (
    <S.Container>
      <SearchBar
        onClickRefresh={handleRefreshRegistrations}
        onValidCpf={handleValidCpf}
        onCleanCpf={handleCleanCpf}
        onGoToNewAdmissionPage={handleGoToNewAdmissionPage}
      />
      <Collumns>
        {allColumns.map((collum) => (
          <Column
            key={collum.status}
            status={collum.status}
            title={collum.title}
            isLoading={isLoading}
            aria-labelledby={collum.labelledby}
          >
            {registrations
              .filter((registration) => registration.status.value === collum.status)
              .map((registration) => {
                return (
                  <RegistrationCard
                    as="li"
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
