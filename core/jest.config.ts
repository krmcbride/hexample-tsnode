import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  passWithNoTests: true,
  preset: 'ts-jest',
};

export default config;
