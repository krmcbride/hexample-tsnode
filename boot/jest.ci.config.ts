import config from './jest.config';

// Add integration tests and test result reporter
config.passWithNoTests = false;
config.testMatch.push('<rootDir>/src/__tests__/**/*.itest.ts');
config.reporters = [
  'default',
  [
    'jest-junit',
    {
      addFileAttribute: 'true',
      outputDirectory: './dist/test-results/jest',
      outputName: 'results.xml',
    },
  ],
];

export default config;
