import { useContext } from 'react'
import {useForm} from "react-hook-form"
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import {HiOutlineArrowLeft} from "react-icons/hi";
import {IconButton} from "~/components/Buttons/IconButton";
import {useHistory} from "react-router-dom";
import routes from "~/router/routes";
import {EmployeeNameValidation} from '~/validations/employee-name-validation'
import {EmailValidation} from '~/validations/email-validation'
import {CpfValidation} from '~/validations/cpf-validation'
import { DiContext } from '~/contexts/di-context'
import { StoreContext } from '~/contexts/store-context'
import {Registration} from "~/entities/registration.ts";
import {RegistrationStatusEnum} from '~/entities/registration-status'


type FormValues = {
    name: string
    email: string
    cpf: string
    admissionDate: Date
}

const NewUserPage = () => {
    const history = useHistory();
    const goToHome = () => {
        history.push(routes.dashboard);
    };

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormValues>();

    const { registrationGateway } = useContext(DiContext)
    const { registrations, setRegistrations } = useContext(StoreContext)

    const onSubmit = handleSubmit(async (data) => {
        const registrationData = new Registration({
            employeeName: data.name,
            cpf: data.cpf,
            email: data.email,
            admissionDate: data.admissionDate,
            status: RegistrationStatusEnum.REVIEW
        })
        const registration = await registrationGateway.create(registrationData)
        setRegistrations([...registrations, registration])
        reset()
        goToHome()
    })

    return (
        <S.Container>
            <S.Card onSubmit={onSubmit}>
                <IconButton onClick={() => goToHome()} aria-label="back">
                    <HiOutlineArrowLeft size={24}/>
                </IconButton>
                <TextField id="name" placeholder="Nome" label="Nome" {...register('name', {
                    validate: EmployeeNameValidation.validate
                })} />
                <TextField id="email" placeholder="Email" label="Email" type="email" {...register('email', {
                    validate: EmailValidation.validate
                })} />
                <TextField id="cpf" placeholder="CPF" label="CPF" {...register('cpf', {
                    validate: CpfValidation.validate
                })} />
                <TextField id="admission-date" label="Data de admissão" type="date" {...register('admissionDate', {required: true})} />
                <Button type="submit">Cadastrar</Button>
            </S.Card>
        </S.Container>
    );
};

export default NewUserPage;
