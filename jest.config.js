module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    globalSetup: './jest/setup.js',
    globalTeardown: './jest/teardown.js',
    testEnvironment: './jest/puppeteer_env.js',
};
