/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'apple-gray': {
          50: '#fbfbfd',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#1d1d1f',
        },
        'apple-blue': '#0071e3',
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.05' }],
      },
    },
  },
  plugins: [],
};