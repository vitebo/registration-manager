interface ConfirmProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Confirm = ({ title, message, onConfirm, onCancel }: ConfirmProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onCancel}>Cancelar</button>
      <button onClick={onConfirm}>Confirmar</button>
    </div>
  );
};
