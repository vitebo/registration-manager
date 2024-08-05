import styled from 'styled-components';

import { Button } from '~/components/Buttons';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    padding: ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const Card = styled.form`
  border-width: ${({ theme }) => theme.borderWidth.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing['xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    min-width: 500px;
  }

  ${Button} {
    align-self: flex-end;
  }
`;
