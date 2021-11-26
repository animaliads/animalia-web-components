import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.[t|j]s?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(@animaliads)/)'],
};
export default config;
