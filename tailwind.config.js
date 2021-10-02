module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: '"Roboto Mono", monospace',
    },
    extend: {},
  },
  variants: {
    scrollSnapType: ['responsive'],
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],
};
