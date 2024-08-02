import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.gray.dark};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing.none};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.gray.dark};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  & > * {
    flex-grow: 1;
  }
`;
