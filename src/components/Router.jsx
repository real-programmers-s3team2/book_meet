import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const Main = loadable(() => import('@pages/Main'));
const Register = loadable(() => import('@pages/Register'));
const Minutes = loadable(() => import('@pages/Minutes'));

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/minutes" component={Minutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
