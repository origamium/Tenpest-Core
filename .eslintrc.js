module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        project: "./tsconfig.json",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        "prettier/prettier": "error",
        "ordered-imports": 0,
        "object-literal-sort-keys": 0,
        "no-console": "warn",
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "react/prop-types": "off",
    }
};
