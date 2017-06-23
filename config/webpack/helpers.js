import path from 'path';

const ROOT = path.resolve(__dirname, '../../');

export const root = path.join.bind(path, ROOT);