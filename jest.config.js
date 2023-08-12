module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/interfaces/**',
    '!**/*.stories.*',
  ],
  moduleNameMapper: {
    // Update the moduleNameMapper entry for image imports
    '\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/repositories/(.*)$': '<rootDir>/src/repositories/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/stories/(.*)$': '<rootDir>/src/stories/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
