import styled from 'styled-components';

interface ButtonProps {
  size?: 'sm';
  variant?: 'success' | 'warning' | 'danger' | 'primary';
}

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['size', 'variant'].includes(prop)
})<ButtonProps>`
  align-items: center;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  cursor: pointer;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.colors.gray.bright};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  transition:
    background-color 200ms,
    color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  //  ---
  //  Size
  //  ---

  ${({ size, theme }) =>
    size === 'sm' &&
    `
      font-size: ${theme.fontSize.xs};
      border-radius: ${theme.borderRadius.sm};
      border: none;
      padding: ${theme.spacing.sm} ${theme.spacing.xl};
  `}

  //  ---
  // Variant
  //  ---

  ${({ variant, theme }) =>
    variant === 'success' &&
    `
      background-color: ${theme.colors.success.bright};
      color: ${theme.colors.gray.dark};
      
      &:hover {
        background-color: ${theme.colors.success.light};
      }
  `}
    
  ${({ variant, theme }) =>
    variant === 'warning' &&
    `
      background-color: ${theme.colors.warning.bright};
      color: ${theme.colors.gray.dark};
      
      &:hover {
        background-color: ${theme.colors.warning.light};
      }
  `}
    
  ${({ variant, theme }) =>
    variant === 'danger' &&
    `
      background-color: ${theme.colors.danger.bright};
      color: ${theme.colors.gray.dark};
      
      &:hover {
        background-color: ${theme.colors.danger.light};
      }
  `}
    
  ${({ variant, theme }) =>
    variant === 'primary' &&
    `
      background-color: ${theme.colors.teal.dark};
      color: ${theme.colors.white};
      
      &:hover {
        background-color: ${theme.colors.teal.bright};
        color: ${theme.colors.white};
      }
  `}
`;
