import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Landing from './components/Landing';
import TestPage from './components/TestPage';
import { getCurrentUser } from './actions/user.actions';

import requireAuth from './lib/requireAuth';
// import waitingForAuth from './lib/waitingForAuth';
import store from './store';

export default (
  <div>
    <Route path="/" component={Layout} onEnter={store.dispatch(getCurrentUser())}>
      <IndexRoute component={requireAuth(Landing)} />
    </Route>
    <Route path="/test" component={Layout} onEnter={store.dispatch(getCurrentUser())}>
      <IndexRoute component={requireAuth(TestPage)} />
    </Route>
  </div>
);