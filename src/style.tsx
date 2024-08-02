import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
  
  :focus {
    outline-offset: ${({ theme }) => theme.spacing.xs};
    outline: ${({ theme }) => theme.spacing.sm} solid ${({ theme }) => theme.colors.outline};
    transition: outline 0.3s ease-in-out;
  }
  
  :focus:hover {
      outline: ${({ theme }) => theme.spacing.md} solid ${({ theme }) => theme.colors.outline};
  }
`;
