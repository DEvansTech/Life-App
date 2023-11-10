/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Poppins: Poppins,
      },
      colors: {
        "primary-color": "#2A5C81",
        "other-red": "#ED1F24",
      },
    },
  },
  plugins: [],
};
