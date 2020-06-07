module.exports = {
  rootDir: '../',
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**src/**/*.js',
    '**src/**/*.jsx',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    // exceptions.
    '/node_modules/',
    'src/index.js',
  ],
  coverageReporters: ['lcov', 'text', 'json', 'text-summary', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverage: true,
  verbose: true,
  testMatch: [
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.spec.js',
    '<rootDir>/src/**/*.test.jsx',
    '<rootDir>/src/**/*.spec.jsx',
  ],
  moduleNameMapper: {
    '\\.(css|svg)$': 'identity-obj-proxy',
    '\\.([scss|css]+)(?:[?#]|$)': '<rootDir>/__mocks__/styleMocks.js',
    '\\.(jpg|jpeg|png|gif|eot|webp|svg|ttf|woff|woff2|mp4|webm|mp3|m4a|aac|oga)$':
      '<rootDir?/__mocks/fileMock.js'
  },
};
