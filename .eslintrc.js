module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'i18next'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension':
            [
                2,
                { extensions: ['.js', '.jsx', '.tsx'] },
            ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
