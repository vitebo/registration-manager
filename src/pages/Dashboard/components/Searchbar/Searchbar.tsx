import { useForm } from 'react-hook-form';
import { HiRefresh } from 'react-icons/hi';
import { useHookFormMask } from 'use-mask-input';

import { Button, ButtonIcon } from '~/components/Buttons';
import { TextField } from '~/components/TextField';
import { Cpf } from '~/entities';
import { CpfValidation } from '~/validations';

import * as S from './styles';

interface SearchBarProps {
  onClickRefresh: () => void;
  onValidCpf: (cpf: Cpf) => void;
  onCleanCpf: () => void;
  onGoToNewAdmissionPage: () => void;
}

type FormValues = {
  cpf: string;
};

export const SearchBar = ({ onClickRefresh, onValidCpf, onGoToNewAdmissionPage, onCleanCpf }: SearchBarProps) => {
  const {
    register,
    formState: { errors },
    resetField
  } = useForm<FormValues>({
    mode: 'onChange'
  });

  const registerWithMask = useHookFormMask(register);

  function handleRefresh() {
    resetField('cpf');
    onClickRefresh();
  }

  function onValidateCpf(cpf: string) {
    if (!cpf) {
      onCleanCpf();
      return;
    }
    const messageError = CpfValidation.validate(cpf);
    if (!messageError) {
      onValidCpf(new Cpf(cpf));
    }
    return messageError;
  }

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        id="cpf"
        error={errors.cpf?.message}
        {...registerWithMask('cpf', 'cpf', {
          validate: onValidateCpf
        })}
      />
      <S.Actions>
        <ButtonIcon aria-label="refetch" onClick={handleRefresh} variant="primary">
          <HiRefresh />
        </ButtonIcon>
        <Button onClick={onGoToNewAdmissionPage} variant="primary">
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  );
};
