/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        'primary': '#2A5C81'
      }
    },
  },
  plugins: [],
}
