import webpackMerge from 'webpack-merge';
import commonConfig from './webpack-common';

export const makeConfig = ({ env, entry, indexPath, outputPath }) => {
  const envConfig = require(`./environments/webpack-${env}`); // eslint-disable-line
  return webpackMerge(commonConfig({
    entry,
    indexPath,
    outputPath
  }), envConfig);
};
