module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'consistent-return': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-useless-escape': 2,
    'no-console': 'error',
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'max-len': ['warn', { code: 100 }],
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['Label'],
      labelAttributes: ['label'],
      controlComponents: [
        'Input',
        'Controller',
        'NameController',
        'EmailController',
        'PasswordController',
        'SearchController',
        'FilterCheckboxController'],
      depth: 3,
    }],
  },
};
