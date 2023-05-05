module.exports = {
    extends: ['./eslintBase.js'],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    globals: {
        _globalConfig: true,
        _rollbarConfig: true,
    },
    rules: {
        'consistent-return': 'off',
        'class-methods-use-this': 0,
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/unbound-method': 0,
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_globalConfig'],
            },
        ],
        'import/no-import-module-exports': [
            'error',
            {
                exceptions: ['**/*/index.tsx'],
            },
        ],
        'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: true }],
    },
};
