import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  passWithNoTests: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
};

export default config as { testMatch: string[] } & Config.InitialOptions;
