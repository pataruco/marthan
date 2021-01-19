import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import App from '../components/App';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const Routes = () => (
  <App>
    <CustomBrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </CustomBrowserRouter>
  </App>
);

export default Routes;
