import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

import config from './config';
import reducer from './reducers';

const middlewares = [promise(), thunk, routerMiddleware(browserHistory)];

if (config.app.environment === 'development') {
    middlewares.push(createLogger());
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware)
