import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  Home,
  NotFound,
} from './containers';

const paths = {
  HOME: '/',
  NOT_FOUND: '*',
};

const openPaths = [
  paths.HOME,
  paths.NOT_FOUND,
];

const userAccess = [];

const adminAccess = [];

export default ({ store }) => {
  const performAcdCheck = (nextState, replace) => {
    // const [, nextRoute] = nextState.routes;
    // const currentPath = nextState.location.pathname;
    // if (adminAccess.includes(nextRoute.path)) {

    // } else if(userAccess.includes(nextRoute.path)) {

    // } else if(openPaths.includes(nextRoute.path)) {

    // }
  };

  return (
    <Route path={ paths.HOME } component={ App }>
      <IndexRoute component={ Home } />
      <Route path={ paths.NOT_FOUND } component={ NotFound } />
    </Route>
  );
};
