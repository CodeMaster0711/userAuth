import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import store from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </MuiThemeProvider>
    , div);
});