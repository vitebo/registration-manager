import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing['3xl']};
`;
