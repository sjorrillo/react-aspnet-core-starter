import HtmlWebpackPlugin from 'html-webpack-plugin';
import { root } from './helpers';

const webpackConfig = ({ entry, indexPath, outputPath }) => {
  const config = {
    entry,
    resolve: {
      extensions: ['.json', '.js', '.ts', '.tsx'],
      modules: [root('src'), root('node_modules')],
    },
    output: {
      path: outputPath,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            { loader: 'babel-loader' },
            { loader: 'awesome-typescript-loader', options: { silent: true } }
          ]
        },
        { test: /\.tsx?$/, loader: 'tslint-loader', enforce: 'pre', options: { failOnHint: true } }
      ]
    },
    plugins: [
       /*
      * Plugin: HtmlWebpackPlugin
      * Description: Simplifies creation of HTML files to serve your webpack bundles.
      * This is especially useful for webpack bundles that include a hash in the filename
      * which changes every compilation.
      *
      * See: https://github.com/ampedandwired/html-webpack-plugin
      */
      new HtmlWebpackPlugin({
        template: indexPath,
        title: 'test time',
        chunksSortMode: 'dependency',
        inject: 'body'
      }),
    ],
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };

  return config;
};

export default webpackConfig;