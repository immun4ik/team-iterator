module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        console: 'readonly', 
    },
    extends: [
        'eslint:recommended', 
    ],
    parserOptions: {
        ecmaVersion: 2021, 
        sourceType: 'module', 
    },
    rules: {
        'no-console': 'off',         
        'no-plusplus': 'off',        
        'no-restricted-syntax': 'off', 
        'max-len': ['error', { code: 120 }], 
    },
};
