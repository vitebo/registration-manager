import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    flex-grow: 1;

    @media (min-width: ${({ theme }) => theme.screens.sm}) {
      flex-grow: 0;
    }
  }
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    justify-content: flex-end;
  }
`;
