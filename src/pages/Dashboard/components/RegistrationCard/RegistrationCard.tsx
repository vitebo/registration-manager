import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi';

import { ButtonSmall } from '~/components/Buttons';
import { Registration, RegistrationStatusEnum } from '~/entities';

import * as S from './styles';

interface RegistrationCardProps {
  registration: Registration;
  onApprove: () => void;
  onReprove: () => void;
  onReview: () => void;
  onDelete: () => void;
}

export const RegistrationCard = ({ registration, onDelete, onReview, onReprove, onApprove }: RegistrationCardProps) => {
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
        <span>{registration.adminssionDateFormated}</span>
      </S.IconAndText>
      <S.Actions>
        {registration.status.canUpdate(RegistrationStatusEnum.REPROVED) && (
          <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={onReprove}>
            Reprovar
          </ButtonSmall>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.APPROVED) && (
          <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={onApprove}>
            Aprovar
          </ButtonSmall>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.REVIEW) && (
          <ButtonSmall bgcolor="#ff8858" onClick={onReview}>
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash onClick={onDelete} />
      </S.Actions>
    </S.Card>
  );
};
