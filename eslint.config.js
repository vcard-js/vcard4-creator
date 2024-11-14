import { includeIgnoreFile } from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests';
import pluginSort from 'eslint-plugin-sort';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
    includeIgnoreFile(gitignorePath),
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    pluginSort.configs['flat/recommended'],
    ...tsEslint.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/computed-property-spacing': ['error', 'never'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/lines-around-comment': [
                'error', { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true }
            ],
            '@stylistic/lines-between-class-members': ['error', 'always'],
            '@stylistic/max-len': ['error', { code: 120, comments: 120, ignoreUrls: true }],
            '@stylistic/max-statements-per-line': ['error', { max: 1 }],
            '@stylistic/member-delimiter-style': 'error',
            '@stylistic/multiline-ternary': ['error', 'always-multiline'],
            '@stylistic/new-parens': ['error', 'always'],
            '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-operators': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
            '@stylistic/no-tabs': ['error', { allowIndentationTabs: false }],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/semi-spacing': 'error',
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': ['error', { classes: 'always', functions: 'always', keywords: 'always' }],
            '@stylistic/space-before-function-paren': [
                'error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }
            ],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
            '@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
            '@stylistic/spaced-comment': ['error', 'always'],
            '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
            '@stylistic/template-curly-spacing': ['error', 'never'],
            '@stylistic/template-tag-spacing': ['error', 'never'],
            '@stylistic/type-annotation-spacing': 'error',
            '@stylistic/type-generic-spacing': 'error',
            '@stylistic/type-named-tuple-spacing': 'error',
            '@stylistic/wrap-iife': ['error', 'inside'],
            '@typescript-eslint/no-explicit-any': 'off', // TODO: Look into addressing this.
            '@typescript-eslint/no-unused-expressions': 'off', // TODO: Think this choice over.
            '@typescript-eslint/no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^_$' }],
            'sort/destructuring-properties': 'off',
            'sort/exports': ['error', { groups: [], typeOrder: 'preserve', caseSensitive: false, natural: true }],
            'sort/export-members': ['error', { caseSensitive: false, natural: true }],
            'sort/imports': [
                'error', { groups: [], separator: '', typeOrder: 'preserve', caseSensitive: false, natural: true }
            ],
            'sort/import-members': ['error', { caseSensitive: false, natural: true }],
            'sort/object-properties': 'off',
            camelcase: 'error',
            eqeqeq: ['error', 'smart'],
            'no-var': 'error',
            'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }]
        }
    },
    {
        files: ['**/*.spec.ts'],
        plugins: {
            '@no-only-tests': pluginNoOnlyTests
        },
        rules: {
            '@no-only-tests/no-only-tests': 'error'
        }
    }
];
