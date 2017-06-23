import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // read https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// import Immutable from 'immutable';
import { clientMiddleware } from './middleware/clientMiddleware';
import reducer from './modules/reducer';

const getStoreCreator = middleware => {
  let storeCreator;
  // if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
  //   const { persistState } = require('redux-devtools'); // eslint-disable-line
  //   const { DevTools } = require('../helpers/dev-tools/dev-tools'); // eslint-disable-line

  //   storeCreator = compose(
  //     applyMiddleware(...middleware),
  //     window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  //     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_createStore);
  // } else {
   storeCreator = applyMiddleware(...middleware)(_createStore);
  // }

  return storeCreator;
};

export default function createStore(client, routingMiddleware, data) {
  const middleware = [clientMiddleware(client), routingMiddleware, thunk];

  const storeCreator = getStoreCreator(middleware);

  // if (data) {
  //   data.pagination = Immutable.fromJS(data.pagination);
  // }

  const store = storeCreator(reducer, data);

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer')); // eslint-disable-line
    });
  }

  return store;
}
