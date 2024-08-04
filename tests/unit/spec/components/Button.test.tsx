import { render, screen } from '~~/unit/fixtures';

import { Button } from '~/components/Buttons';

describe('Components > Button', () => {
  it('Should show button', () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole('button', { name: /ativar/i }));
  });
});
