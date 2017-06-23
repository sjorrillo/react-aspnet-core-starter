import { process } from './globals';
import merge from 'lodash/merge';

const baseEnvironment = 'development'; //base config environment

const getEnvironment = () => {
  let nodeEnv = process.env.NODE_ENV || '';
  if (!nodeEnv.match(/^development$|^integration$|^production$/i)) return baseEnvironment;
  return nodeEnv;
};


export const createConfig = ({ configsDir }) => {
  const nodeEnv = getEnvironment();
  const setupConfig = {
    env: nodeEnv.toLowerCase(),
    isDevelopment: (/development/i).test(nodeEnv),
    isIntegration: (/integration/i).test(nodeEnv),
    isProduction: (/production/i).test(nodeEnv),
  };

  const baseConfig = require(`${configsDir}/${baseEnvironment}`); // eslint-disable-line
  const envConfig = setupConfig.env === baseEnvironment ? {} : require(`${configsDir}/${setupConfig.env}`); // eslint-disable-line
  return merge(baseConfig, envConfig, setupConfig);
};
