import { Registration, RegistrationStatusEnum } from '~/entities';

import * as S from './styles';
// eslint-disable-next-line no-restricted-imports
import { RegistrationCard } from '../RegistrationCard';

const allColumns = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado' }
];

type Props = {
  registrations?: Registration[];
};

export const Collumns = (props: Props) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>{collum.title}</S.TitleColumn>
              <S.CollumContent>
                {props?.registrations
                  ?.filter((registration) => registration.status.value === collum.status)
                  ?.map((registration) => {
                    return <RegistrationCard registration={registration} key={registration.id} />;
                  })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
