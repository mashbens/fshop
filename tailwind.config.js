/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Ini paling penting
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155'
        }
      }
    },
  },
  plugins: [],
}