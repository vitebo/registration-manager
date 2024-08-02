import { Button } from '~/components/Buttons';

import * as S from './style';

interface ConfirmProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Confirm = ({ title, message, onConfirm, onCancel }: ConfirmProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
      <S.Actions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button onClick={onConfirm} variant="primary">
          Confirmar
        </Button>
      </S.Actions>
    </S.Container>
  );
};
