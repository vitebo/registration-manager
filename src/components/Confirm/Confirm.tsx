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
        <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
        <S.ConfirmButton onClick={onConfirm}>Confirmar</S.ConfirmButton>
      </S.Actions>
    </S.Container>
  );
};
