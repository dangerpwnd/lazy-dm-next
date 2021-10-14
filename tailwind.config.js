module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#8C8C8C',
          DEFAULT: '#5A5A5A',
          dark: '#242424',
        },
      },
      fontFamily: {
        mono: ['Noto Sans Mono', 'monospace'],
        serif: ['Inknut Antiqua', 'serif'],
      },
      gridTemplateColumns: {
        dungeon: '15% 70% 15%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
