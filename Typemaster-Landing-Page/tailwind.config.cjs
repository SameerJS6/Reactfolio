/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#E8EFF2",
        orange: "#F16718",
        textBlue: "#7B8BAD",
        darkBlue: "#162542",
      },
    },
  },
  plugins: [],
};
