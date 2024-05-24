import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// хотя вроде и так работает. Ну если что, тут paths из tsconfig
const moduleNameMapper = {
  '^\\*': '<rootDir>/src/services/$1',
  '^@app/(.*)$': '<rootDir>/src/app/$1',
  '^@core/(.*)$': '<rootDir>/src/core/$1',
};

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // moduleNameMapper,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
