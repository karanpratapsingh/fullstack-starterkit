module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/db/db.test.ts', '**/tests/graphql/graphql.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/']
};
