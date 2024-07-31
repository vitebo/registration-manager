import styled, { css } from 'styled-components';

import { NotificationType } from './NotificationItem';

const notificationTypes = {
  [NotificationType.ERROR]: css`
    background-color: #fee2e2;
    color: #b91c1c;
    border-color: #b91c1c;
  `,
  [NotificationType.SUCCESS]: css`
    background-color: #dcfce7;
    color: #047857;
    border-color: #047857;
  `,
  [NotificationType.INFO]: css`
    border-color: #0369a1;
    background-color: #e0f2fe;
    color: #0369a1;
  `
};

export const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
`;

export const Item = styled.div<{ type: NotificationType }>`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-style: solid;
  border-width: 1px;

  padding: 16px;
  margin-top: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ type }) => notificationTypes[type]}
`;

export const Message = styled.p`
  margin: 0;
`;

export const CloseButton = styled.button`
  margin-left: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 8px;
  display: flex;
  align-items: center;
`;
