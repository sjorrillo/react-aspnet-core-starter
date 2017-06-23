import { makeConfig } from '../../config/webpack/webpack-config-factory';
import { root } from '../../config/webpack/helpers';
import config from './config';

const getRoot = fileName => root('src', 'client', fileName);

export default makeConfig({
  env: config.env,
  entry: {
    polyfills: getRoot('polyfills.js'),
    vendor: getRoot('vendor.js'),
    client: getRoot('client.js'),
  },
  indexPath: getRoot('index.html'),
  outputPath: root('dist'),
});
