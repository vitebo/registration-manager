import {ButtonSmall} from "~/components/Buttons";
import {Registration} from "~/entities/registration";
import * as S from "./styles";
import {
    HiOutlineMail,
    HiOutlineUser,
    HiOutlineCalendar,
    HiOutlineTrash,
} from "react-icons/hi";

type Props = {
    data: Registration;
};

const RegistrationCard = (props: Props) => {
    return (
        <S.Card>
            <S.IconAndText>
                <HiOutlineUser/>
                <h3>{props.data.employeeName.value}</h3>
            </S.IconAndText>
            <S.IconAndText>
                <HiOutlineMail/>
                <p>{props.data.email.value}</p>
            </S.IconAndText>
            <S.IconAndText>
                <HiOutlineCalendar/>
                <span>{props.data.admissionDate.toString()}</span>
            </S.IconAndText>
            <S.Actions>
                <ButtonSmall bgcolor="rgb(255, 145, 154)">Reprovar</ButtonSmall>
                <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
                <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>

                <HiOutlineTrash/>
            </S.Actions>
        </S.Card>
    );
};

export default RegistrationCard;
