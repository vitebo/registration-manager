import { Button } from '~/components/Buttons';
import { render, screen } from '~~/unit/fixtures/';

describe('Components > Button', () => {
  it('Should show button', () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole('button', { name: /ativar/i }));
  });
});
