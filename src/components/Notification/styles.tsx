import styled, { css } from 'styled-components';

import { NotificationType } from './NotificationItem';

export const Container = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  z-index: 1000;
`;

export const Item = styled.div<{ type: NotificationType }>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidth.xs};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};

  ${({ type, theme }) =>
    type === NotificationType.SUCCESS &&
    css`
      background-color: ${theme.colors.success.light};
      color: ${theme.colors.success.dark};
      border-color: ${theme.colors.success.dark};
    `}

  ${({ type, theme }) =>
    type === NotificationType.ERROR &&
    css`
      background-color: ${theme.colors.danger.light};
      color: ${theme.colors.danger.dark};
      border-color: ${theme.colors.danger.dark};
    `}
`;

export const Message = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
`;

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  margin-left: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md};
`;
