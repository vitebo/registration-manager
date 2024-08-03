import styled, { keyframes } from 'styled-components';

import { RegistrationStatusEnum } from '~/entities';

export const Container = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: ${({ theme }) => theme.spacing['3xl']};
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  overflow: hidden;
`;

const skeletonLoading = keyframes`
  to {
    background-position: -200% 0;
  }
`;

export const Column = styled.section.withConfig({
  shouldForwardProp: (prop) => !['loading', 'type'].includes(prop)
})<{ type: RegistrationStatusEnum; loading: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding-bottom: ${({ theme }) => theme.spacing['xl']};
  animation: ${skeletonLoading} 1.5s infinite;

  //  ---
  //  Type
  //  ---

  ${({ type, theme }) =>
    type === RegistrationStatusEnum.REVIEW &&
    `
      background-color: ${theme.colors.yellow.light};
      color: ${theme.colors.yellow.dark};
  `}

  ${({ type, theme }) =>
    type === RegistrationStatusEnum.APPROVED &&
    `
      background-color: ${theme.colors.blue.light};
      color: ${theme.colors.blue.dark};
  `}
  
  ${({ type, theme }) =>
    type === RegistrationStatusEnum.REPROVED &&
    `
      background-color: ${theme.colors.pink.light};
      color: ${theme.colors.pink.dark};
  `}
  
  //  ---
  //  Loading
  //  ---
  
  ${({ loading, theme }) =>
    loading &&
    `
    background: ${theme.colors.gradients.skeleton};
    background-size: 200% 100%;
    color: ${theme.colors.gray.bright};
  `}
`;

export const TitleColumn = styled.h2`
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing['2xl']};
  font-size: ${({ theme }) => theme.spacing['2xl']};
`;

export const CollumContent = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing['xl']};
  margin: ${({ theme }) => theme.spacing.none};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.none};

  & > * {
    margin-left: ${({ theme }) => theme.spacing['xl']};
    margin-right: ${({ theme }) => theme.spacing['xl']};
  }

  & > *:last-child {
    margin-bottom: ${({ theme }) => theme.spacing['xl']};
  }
`;
