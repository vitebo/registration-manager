import { render, screen } from '~~/unit/fixtures';

import { Confirm } from '~/components/Confirm';

describe('Components > Confirm', () => {
  it('call onConfig cb when confirm action', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(
      <Confirm
        title="Deletar registration"
        message="Deseja realmente deletar?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
    screen.getByRole('button', { name: /confirmar/i }).click();
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(0);
  });

  it('call onConfig cb when confirm action', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(
      <Confirm
        title="Deletar registration"
        message="Deseja realmente deletar?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
    screen.getByRole('button', { name: /cancelar/i }).click();
    expect(onConfirm).toHaveBeenCalledTimes(0);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
