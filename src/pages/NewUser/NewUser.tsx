import { useForm } from 'react-hook-form';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { useHookFormMask } from 'use-mask-input';

import { Button, ButtonIcon } from '~/components/Buttons';
import { TextField } from '~/components/TextField';
import { Registration } from '~/entities';
import { useRegistration } from '~/hooks';
import { routes } from '~/router';
import { CpfValidation, EmailValidation, EmployeeNameValidation } from '~/validations';

import * as S from './styles';

type FormValues = {
  name: string;
  email: string;
  cpf: string;
  admissionDate: Date;
};

export const NewUserPage = () => {
  const history = useHistory();
  const { createRegistration, ActionStatus } = useRegistration();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  const registerWithMask = useHookFormMask(register);

  const onSubmit = handleSubmit(async (data) => {
    const registration = new Registration({
      employeeName: data.name,
      cpf: data.cpf,
      email: data.email,
      admissionDate: data.admissionDate
    });
    const actionStatus = await createRegistration(registration);
    if (actionStatus === ActionStatus.SUCCESS) {
      reset();
      goToHome();
    }
  });

  return (
    <S.Container>
      <S.Card onSubmit={onSubmit}>
        <ButtonIcon onClick={() => goToHome()} aria-label="back" variant="primary">
          <HiOutlineArrowLeft size={24} />
        </ButtonIcon>
        <TextField
          id="name"
          placeholder="Nome"
          label="Nome"
          error={errors.name?.message}
          {...register('name', {
            validate: EmployeeNameValidation.validate
          })}
        />
        <TextField
          id="email"
          placeholder="Email"
          label="Email"
          type="email"
          error={errors.email?.message}
          {...registerWithMask('email', 'email', {
            validate: EmailValidation.validate
          })}
        />
        <TextField
          id="cpf"
          placeholder="CPF"
          label="CPF"
          error={errors.cpf?.message}
          {...registerWithMask('cpf', 'cpf', {
            validate: CpfValidation.validate
          })}
        />
        <TextField
          id="admission-date"
          label="Data de admissão"
          type="date"
          error={errors.admissionDate?.message}
          {...registerWithMask('admissionDate', 'datetime', {
            required: {
              value: true,
              message: 'Data de admissão é obrigatória'
            }
          })}
        />
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </S.Card>
    </S.Container>
  );
};
