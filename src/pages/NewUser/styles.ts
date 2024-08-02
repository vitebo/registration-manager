import styled from 'styled-components';

import { Button } from '~/components/Buttons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
`;

export const Card = styled.form`
  border-width: ${({ theme }) => theme.borderWidth.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray.light};
  min-width: 500px;
  padding: ${({ theme }) => theme.spacing['xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  ${Button} {
    align-self: flex-end;
  }
`;
