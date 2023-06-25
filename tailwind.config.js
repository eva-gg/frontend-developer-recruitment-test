/** @type {import('tailwindcss').Config} */

const tokens = require('./src/style/tokens/');

module.exports = {
  content: [
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      ...tokens,
    },
  },
  plugins: [],
};
