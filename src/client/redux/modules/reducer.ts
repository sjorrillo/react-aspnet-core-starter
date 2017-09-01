import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import auth from './auth';
// import home from './home';
// import {reducer as form} from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  // auth,
  // home,
});
