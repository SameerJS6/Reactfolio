/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
