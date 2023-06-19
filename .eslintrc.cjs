module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: { ecmaVersion: 2020 },
    extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
    ignorePatterns: ['**/*.example.*.js'],
};
