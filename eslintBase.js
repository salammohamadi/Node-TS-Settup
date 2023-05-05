module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        browser: true,
        'jest/globals': true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    globals: {
        process: true,
        Piwik: true,
        _paq: true,
        _pwebkitAudioContextaq: true,
    },
    plugins: ['@typescript-eslint', 'jest', 'typescript-sort-keys'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['index.d.ts'],
    rules: {
        'import/no-unresolved': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',

        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-empty': [
            'warn',
            {
                allowEmptyCatch: true,
            },
        ],
        'no-underscore-dangle': [
            'error',
            { allow: ['_paq', '_id', '__REDUX_DEVTOOLS_EXTENSION__', 'hj'] },
        ],
        'arrow-parens': ['warn', 'always'],
        'no-plusplus': 0,
        'no-console': ['warn', { allow: ['warn', 'error', 'info', 'group', 'groupEnd', 'trace'] }],
        'linebreak-style': 0,
        'eol-last': 0,
        indent: 0,
        'no-param-reassign': [
            'error',
            {
                ignorePropertyModificationsFor: ['draft'],
            },
        ],
        curly: ['error', 'all'],
        camelcase: 0,
        'import/extensions': [
            0,
            'never',
            {
                ts: 'never',
            },
        ],
        'no-continue': 0,
        'no-cond-assign': ['error', 'except-parens'],
        'import/prefer-default-export': 0,
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
        ],
        '@typescript-eslint/array-type': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 0,

        'react/prop-types': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 0,
        'react/prefer-stateless-function': [
            0,
            {
                ignorePureComponents: true,
            },
        ],
        'react/forbid-prop-types': 0,
        'react/jsx-no-undef': [
            2,
            {
                allowGlobals: true,
            },
        ],
        // 'react/jsx-no-useless-fragment': [
        //     'error',
        //     {
        //         allowExpressions: true,
        //     },
        // ],
        'react/destructuring-assignment': 0,
        'react/no-did-update-set-state': 0,
        'react/sort-comp': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/no-array-index-key': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/no-danger': 0,
        'react/static-property-placement': 0,
        'react/require-default-props': 0,

        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': [
            'error',
            {
                handlers: ['onClick'],
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
