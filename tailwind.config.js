/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090a',
          900: '#0c0f10',
          850: '#111516',
          800: '#171c1d',
          700: '#232a2b',
          600: '#333c3d',
        },
        mint: {
          300: '#8ff5d2',
          400: '#4eecb9',
          500: '#22d39f',
        },
        rose: {
          400: '#f472b6',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
