import { createStore as _createStore, applyMiddleware } from 'redux'; // compose
import thunk from 'redux-thunk'; // read https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// import Immutable from 'immutable';
import { clientMiddleware } from './middleware/clientMiddleware';
import reducer from './modules/reducer';

const getStoreCreator = middleware => {
  let storeCreator;
  // if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
  //   const { persistState } = require('redux-devtools');
  //   const { DevTools } = require('../helpers/dev-tools/dev-tools');

  //   storeCreator = compose(
  //     applyMiddleware(...middleware),
  //     window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  //     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_createStore);
  // } else {
  storeCreator = applyMiddleware(...middleware)(_createStore);
  // }

  return storeCreator;
};

export default function createStore(client: object, routingMiddleware: object, data: object) {
  const middleware = [clientMiddleware(client), routingMiddleware, thunk];

  const storeCreator = getStoreCreator(middleware);

  // if (data) {
  //   data.pagination = Immutable.fromJS(data.pagination);
  // }

  const store = storeCreator(reducer, data);
  const hotModule = (module as any).hot;
  if (hotModule) {
    hotModule.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
