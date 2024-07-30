import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard } from '~/pages/Dashboard';
import { NewUserPage } from '~/pages/NewUser';

import { routes } from './routes';

export const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
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
    </div>
  );
};
