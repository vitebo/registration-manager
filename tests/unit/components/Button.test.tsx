import { render, screen } from '@testing-library/react';

import { Button } from '~/components/Buttons';

describe('Button', () => {
  it.skip('Should show button', () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole('button', { name: /ativar/i }));
  });
});
