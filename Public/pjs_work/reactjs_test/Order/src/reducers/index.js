import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'
import user from './userReducer';

export default combineReducers({
  currentUser: user,
  routing: routerReducer,
  form: reduxFormReducer
})
