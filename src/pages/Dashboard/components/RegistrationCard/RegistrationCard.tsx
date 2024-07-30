import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi';

import { ButtonSmall } from '~/components/Buttons';
import { Registration, RegistrationStatusEnum } from '~/entities';
import { useRegistrationStatus } from '~/hooks';

import * as S from './styles';

type Props = {
  registration: Registration;
};

export const RegistrationCard = ({ registration }: Props) => {
  const registrationStatus = useRegistrationStatus();

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{registration.employeeName.value}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{registration.email.value}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{registration.admissionDate.toString()}</span>
      </S.IconAndText>
      <S.Actions>
        {registration.status.canUpdate(RegistrationStatusEnum.REPROVED) && (
          <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={() => registrationStatus.reprove(registration)}>
            Reprovar
          </ButtonSmall>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.APPROVED) && (
          <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={() => registrationStatus.approve(registration)}>
            Aprovar
          </ButtonSmall>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.REVIEW) && (
          <ButtonSmall bgcolor="#ff8858" onClick={() => registrationStatus.review(registration)}>
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};
