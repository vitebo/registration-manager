import { useForm } from 'react-hook-form';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import { Button, IconButton } from '~/components/Buttons';
import { TextField } from '~/components/TextField';
import { ActionStatus } from '~/constants';
import { Registration } from '~/entities';
import { useCreateRegistration } from '~/hooks';
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
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  const createRegistration = useCreateRegistration();

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
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
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
          {...register('email', {
            validate: EmailValidation.validate
          })}
        />
        <TextField
          id="cpf"
          placeholder="CPF"
          label="CPF"
          error={errors.cpf?.message}
          {...register('cpf', {
            validate: CpfValidation.validate
          })}
        />
        <TextField
          id="admission-date"
          label="Data de admissão"
          type="date"
          error={errors.admissionDate?.message}
          {...register('admissionDate', {
            required: {
              value: true,
              message: 'Data de admissão é obrigatória'
            }
          })}
        />
        <Button type="submit">Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};
