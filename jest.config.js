module.exports = {
    collectCoverage: true,
    globalSetup: './jest/setup.js',
    globalTeardown: './jest/teardown.js',
    testEnvironment: './jest/puppeteer_env.js',
};
