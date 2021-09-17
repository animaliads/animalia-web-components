import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'jsdom'
};
export default config;
