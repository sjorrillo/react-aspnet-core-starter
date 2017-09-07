import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createStore from './redux/create';
import getRoutes from './routing';
import { client } from './modules/api-client';

const routingMiddleware = routerMiddleware(browserHistory);
const store = createStore(client, routingMiddleware, {}); // window.__data)
const history = syncHistoryWithStore(browserHistory, store);
const appContainer = document.getElementById('app');

const component = (
  <Router history={ history }>
    { getRoutes(store) }
  </Router>
);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={ store } key="provider">
      { component }
    </Provider>,
    appContainer
  );
};

const initClient = () => {
  renderApp();
};

initClient();
