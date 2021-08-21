module.exports = {
  purge: [
    'dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'source': ['SourceSans', 'Helvetiva', 'Arial', 'SourceHanSans', '"Microsoft Yahei"', 'sans-serif'],
    },
    extend: {
      spacing: {
        '1\/6': '16.666667%',
        '88': '22rem',
      },
      screens: {
        'xs': '480px',
      },
      flexGrow: {
        '2': '2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
