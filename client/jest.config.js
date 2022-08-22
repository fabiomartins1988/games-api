module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/application/$1',
    },
    moduleFileExtensions: [
      "js",
      "json",
      "vue"
    ],
    transform: {
      ".*\\.(vue)$": "vue3-jest",
      '^.+\\.js$': 'babel-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
    coverageDirectory: './coverage',
    coverageReporters: ['text', 'clover', 'lcov'],
  };
};