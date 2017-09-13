import webpackMerge from 'webpack-merge';
import commonConfig from './webpack-common';
import envVal from '../common/env-val';

export const makeConfig = ({ env, entry, indexPath, outputPath }) => {
  const makeEnvConfig = require(`./environments/webpack-${env}`); // eslint-disable-line
  return webpackMerge(commonConfig({
    entry,
    indexPath,
    outputPath,
  }),
  makeEnvConfig({
    serverPort: envVal('PORT', 3000),
    serverHost: envVal('HOST', 'localhost'),
  }));
};
