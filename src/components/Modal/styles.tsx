import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.overlay};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Card = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  position: relative;
  margin: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    min-width: 320px;
  }
`;

export const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: ${({ theme }) => theme.borderWidth.none};
  display: flex;
  padding: ${({ theme }) => theme.spacing.md};
  position: absolute;
  right: ${({ theme }) => theme.spacing.xl};
  top: ${({ theme }) => theme.spacing.xl};

  svg {
    color: ${({ theme }) => theme.colors.gray.dark};
  }
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  flex-grow: 1;
`;
