module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'always',
        },
      },
    ],
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
  },
};
