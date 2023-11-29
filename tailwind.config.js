/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins_300: 'Poppins_300Light',
        Poppins_400: 'Poppins_400Regular',
        Poppins_500: 'Poppins_500Medium',
        Poppins_600: 'Poppins_600SemiBold',
        Poppins_700: 'Poppins_700Bold',
      },
      colors: {
        "primary-color": "#2A5C81",
        "other-red": "#ED1F24",
      },
    },
  },
  plugins: [],
};
