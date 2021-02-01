import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import App from '../components/App';
import Gallery from '../pages/gallery';
import ReactGA from 'react-ga';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const Routes = () => {
  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV != 'development') {
      ReactGA.initialize('G-T4T6Q95Z67');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <App>
      <CustomBrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </CustomBrowserRouter>
    </App>
  );
};

export default Routes;
