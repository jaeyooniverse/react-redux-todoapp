module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 다음 설정을 해주어야 test 코드를 작성할 때, describe, it, expect를 사용하며 eslint(no-undef) 에러를 만나지 않음
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  globals: {
    context: 'readonly', // 다음 설정을 해주어야 test 코드를 작성할 때, context를 사용하며 eslint(no-undef) 에러를 만나지 않음
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17? 18?부터 import React from 'react';를 사용하지 않아도 되므로 eslint 에러를 해결하기 위해 해당 rule을 추가함
  },
};
