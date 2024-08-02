import { styled } from 'styled-components';

import { Header, HeaderTitle } from '~/components/Header';
import { Router } from '~/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export function App() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Caju Front Teste</HeaderTitle>
      </Header>
      <Router />
    </Container>
  );
}
