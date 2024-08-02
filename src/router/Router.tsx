import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '~/constants';
import { Dashboard } from '~/pages/Dashboard';
import { NewUserPage } from '~/pages/NewUser';

import { routes } from './routes';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: ${HEADER_HEIGHT};
  max-height: calc(100vh - ${HEADER_HEIGHT});
`;

export const Router = () => {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path={routes.dashboard} component={Dashboard} />
          <Route exact path={routes.newUser} component={NewUserPage} />
          <Route exact path={routes.history} component={() => <div>History</div>} />

          <Route exact path="*">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </HashRouter>
    </Container>
  );
};
