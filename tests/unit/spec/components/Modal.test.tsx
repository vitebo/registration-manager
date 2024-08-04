import { render, screen } from '~~/unit/fixtures';

import { Modal } from '~/components/Modal';

describe('Components > Modal', () => {
  const ContentComponent = () => <div>Content</div>;

  it('show content when modal is open', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} content={<ContentComponent />} onClose={onClose}></Modal>);
    expect(screen.queryByText(/content/i)).toBeTruthy();
  });

  it('does not show content when modal is closed', async () => {
    const onClose = jest.fn();
    render(<Modal isOpen={false} content={<ContentComponent />} onClose={onClose}></Modal>);
    expect(screen.queryByText(/content/i)).toBeFalsy();
  });

  it('call onClose when click on close button', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} content={<ContentComponent />} onClose={onClose}></Modal>);
    screen.getByRole('button').click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('call onClose when click on overlay', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} content={<ContentComponent />} onClose={onClose}></Modal>);
    screen.getByTestId('overlay').click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('call onClose when press escape', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} content={<ContentComponent />} onClose={onClose}></Modal>);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
