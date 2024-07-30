import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import {Registration} from "~/entities/registration";
import {RegistrationStatusEnum} from '~/entities/registration-status'

const allColumns = [
    {status: RegistrationStatusEnum.REVIEW, title: "Pronto para revisar"},
    {status: RegistrationStatusEnum.APPROVED, title: "Aprovado"},
    {status: RegistrationStatusEnum.REPROVED, title: "Reprovado"},
];

type Props = {
    registrations?: Registration[];
};
const Collumns = (props: Props) => {
    return (
        <S.Container>
            {allColumns.map((collum) => {
                return (
                    <S.Column status={collum.status} key={collum.title}>
                        <>
                            <S.TitleColumn status={collum.status}>
                                {collum.title}
                            </S.TitleColumn>
                            <S.CollumContent>
                                {props?.registrations
                                    ?.filter(registration => registration.status.value === collum.status)
                                    ?.map((registration) => {
                                    return (
                                        <RegistrationCard
                                            data={registration}
                                            key={registration.id}
                                        />
                                    );
                                })}
                            </S.CollumContent>
                        </>
                    </S.Column>
                );
            })}
        </S.Container>
    );
};
export default Collumns;
