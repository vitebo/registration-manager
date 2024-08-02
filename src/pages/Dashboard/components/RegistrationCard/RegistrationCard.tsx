import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi';

import { Button, ButtonIcon } from '~/components/Buttons';
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
        <S.CardTitle>{registration.employeeName.value}</S.CardTitle>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <S.CardText>{registration.email.value}</S.CardText>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{registration.adminssionDateFormated}</span>
      </S.IconAndText>
      <S.Actions>
        {registration.status.canUpdate(RegistrationStatusEnum.REPROVED) && (
          <Button variant="danger" size="sm" onClick={onReprove}>
            Reprovar
          </Button>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.APPROVED) && (
          <Button variant="success" size="sm" onClick={onApprove}>
            Aprovar
          </Button>
        )}
        {registration.status.canUpdate(RegistrationStatusEnum.REVIEW) && (
          <Button variant="warning" size="sm" onClick={onReview}>
            Revisar novamente
          </Button>
        )}
        <ButtonIcon onClick={onDelete}>
          <HiOutlineTrash />
        </ButtonIcon>
      </S.Actions>
    </S.Card>
  );
};
