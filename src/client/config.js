import { createConfig } from '../../config/common/create-config';

export default createConfig((setupConfig, baseEnvironment) => {
  const baseConfig = require(`./configs/${baseEnvironment}`); // eslint-disable-line
  const envConfig = setupConfig.env === baseEnvironment ? {} : require(`./configs/${setupConfig.env}`); // eslint-disable-line
  return {
    baseConfig,
    envConfig
  };
});
