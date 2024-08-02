import styled from 'styled-components';

interface ButtonIconProps {
  variant?: 'primary';
}

export const ButtonIcon = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<ButtonIconProps>`
  align-items: center;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  transition: background-color 200ms;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.teal.light};
  }

  //  ---
  // Variant
  //  ---

  ${({ variant, theme }) =>
    variant === 'primary' &&
    `
      border: ${theme.borderWidth.sm} solid ${theme.colors.teal.dark};
      color: ${theme.colors.teal.dark};
      
      svg {
        color: ${theme.colors.teal.dark};
      }
  `}
`;
