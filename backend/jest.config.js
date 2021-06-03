module.exports = {
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testMatch: ['**/tests/**/?(*.)+(test).ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  moduleNameMapper: {
    '@backend/config': '<rootDir>/config',
    '@backend/(.*)$': '<rootDir>/packages/$1'
  }
};
