import path from 'path';
import { createConfig } from '../../config/common/create-config';

export default createConfig({
  configsDir: path.resolve(__dirname, './configs/'),
});
