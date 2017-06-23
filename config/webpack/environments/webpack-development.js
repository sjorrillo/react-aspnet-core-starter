
const developmentConfig = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: 'js/[id].chunk.js',
  },
  /**
   * Webpack Development Server configuration
   * Description: The webpack-dev-server is a little node.js Express server.
   * The server emits information about the compilation state to the client,
   * which reacts to those events.
   *
   * See: https://webpack.github.io/docs/webpack-dev-server.html
   */
  devServer: {
    port: '4300',
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      // if you're using Docker you may need this
      // aggregateTimeout: 300,
      // poll: 1000,
      ignored: /node_modules/
    },
    /**
    * Here you can access the Express app object and add your own custom middleware to it.
    *
    * See: https://webpack.github.io/docs/webpack-dev-server.html
    */
    setup: function(app) {
      // For example, to define custom handlers for some paths:
      // app.get('/some/path', function(req, res) {
      //   res.json({ custom: 'response' });
      // });
    }
  },
};

export default developmentConfig;