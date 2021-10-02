const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: '"Roboto Mono", monospace',
    },
    screens: {
      xs: '460px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    scrollSnapType: ['responsive'],
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],
};
