import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: space-between;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: flex-end;
`;
