import { getRollupConfig } from '../../rollup.config';
import pkg from './package.json';

const input = 'src/index.ts';

export default getRollupConfig(input, pkg);
