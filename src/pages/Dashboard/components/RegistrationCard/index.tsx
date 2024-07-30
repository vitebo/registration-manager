import { ButtonSmall } from '~/components/Buttons';
import { Registration } from '~/entities/registration';
import * as S from './styles';
import { HiOutlineMail, HiOutlineUser, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi';
import { useRegistrationStatus } from '~/hooks/use-registration-status';

type Props = {
  registration: Registration;
};

const RegistrationCard = ({ registration }: Props) => {
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
        <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={() => registrationStatus.reprove(registration)}>
          Reprovar
        </ButtonSmall>
        <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={() => registrationStatus.approve(registration)}>
          Aprovar
        </ButtonSmall>
        <ButtonSmall bgcolor="#ff8858" onClick={() => registrationStatus.review(registration)}>
          Revisar novamente
        </ButtonSmall>
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
