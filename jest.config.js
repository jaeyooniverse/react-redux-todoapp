module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  clearMocks: true,
};
