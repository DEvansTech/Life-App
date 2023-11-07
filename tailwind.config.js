/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ["Poppins"],
    },
    extend: {
      colors: {
        "primary-color": "#2A5C81",
      },
    },
  },
  plugins: [],
};
