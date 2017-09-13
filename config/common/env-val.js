import { process } from './globals';

const isUndefined = value => typeof value === 'undefined' || value === null;

const envVal = (key, defaultValue) => {
  const value = process.env[key];
  if (isUndefined(value) || value === '') return defaultValue;
  return value || defaultValue;
};

export default envVal;