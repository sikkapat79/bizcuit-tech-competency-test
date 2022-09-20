/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
