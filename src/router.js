import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login  from './routes/login'
import Home from './routes/home'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
