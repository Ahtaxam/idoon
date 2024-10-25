/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary_bg: '#1a1f2e',
        primary: '#75187C',
        secondary: '#B870C6'
      }
    }
  },
  plugins: []
};
