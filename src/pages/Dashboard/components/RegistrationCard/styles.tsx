import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

export const CardTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const CardText = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const IconAndText = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
