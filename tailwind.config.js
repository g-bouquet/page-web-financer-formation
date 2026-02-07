/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8eceff',
          400: '#59b3ff',
          500: '#2ea3f2',
          600: '#1a8ce0',
          700: '#1470b5',
          800: '#165d95',
          900: '#184e7a',
        },
        muted: {
          50: '#f0f2f6',
          100: '#e0e4ec',
          200: '#c5ccd9',
          300: '#a3adc0',
          400: '#8a96ad',
          500: '#7b8daa',
          600: '#6b7a96',
          700: '#5a677d',
          800: '#4d5768',
          900: '#424a57',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
