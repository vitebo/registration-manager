import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: ${({ theme }) => theme.borderWidth.xs} solid ${({ theme }) => theme.colors.gray.bright};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 18px;
  min-height: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => `${theme.spacing.none} ${theme.spacing.md}`};
  transition: all 0.2s ease-in-out 0s;
  vertical-align: middle;
  width: 100%;

  &:invalid,
  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.danger.dark};
  }
`;

export const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.danger.dark};
`;
