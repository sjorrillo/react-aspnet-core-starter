const makeConfig = () => {
  const config = {
    devtool: 'inline-source-map',
    cache: false,
    debug: true,
  };
  return config;
};

export default makeConfig;