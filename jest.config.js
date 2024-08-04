/** @type {import('jest').Config} */
export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: 'tsconfig.test.json'
      }
    ],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '^~~/(.+)': '<rootDir>/tests/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/tests/e2e/']
};
