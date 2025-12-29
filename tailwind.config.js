/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3f8', 100: '#cce7f1', 200: '#99cfe3', 300: '#66b7d5',
          400: '#339fc7', 500: '#0077B6', 600: '#005f92', 700: '#00476d',
        },
        secondary: { 500: '#023E8A', 600: '#023270' },
        accent: { 500: '#2A9D8F', 600: '#228176' },
      },
    },
  },
  plugins: [],
}
