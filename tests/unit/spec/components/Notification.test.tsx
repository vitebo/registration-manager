import { render, screen } from '~~/unit/fixtures';

import { NotificationType, NotificationList, NotificationItem } from '~/components/Notification';

describe('Components > Notification', () => {
  it('show content when modal is open', () => {
    const onClose = jest.fn();
    render(
      <NotificationList>
        <NotificationItem message="content" type={NotificationType.SUCCESS} onClose={onClose} />
      </NotificationList>
    );
    expect(screen.queryByText(/content/i)).toBeTruthy();
  });

  it('close notification when click on close button', () => {
    const onClose = jest.fn();
    render(
      <NotificationList>
        <NotificationItem message="content" type={NotificationType.SUCCESS} onClose={onClose} />
      </NotificationList>
    );
    screen.getByRole('button').click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
