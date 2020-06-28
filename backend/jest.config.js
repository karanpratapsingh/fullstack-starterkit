module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/?(*.)+(test).ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/']
};
