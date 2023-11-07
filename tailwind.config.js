const Poppins = require('./assets/fonts/Poppins/Poppins-Regular.ttf');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: Poppins,
      },
      colors: {
        "primary-color": "#2A5C81",
      },
    },
  },
  plugins: [],
};
