import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import store from './store';
import './index.css';

const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </MuiThemeProvider>
);


const root = document.getElementById('root');
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <App />,
    root);
registerServiceWorker();
