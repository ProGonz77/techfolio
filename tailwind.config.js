/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        pthin:["Poppins-Thin", "sans serif"],
        pextralight:["Poppins-ExtraLight","sans serif"],
        plight:["Poppins-Light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        pblack:["Poppins-Black",""],
        jbold:["Jura-Bold", "sans-serif"],
        jlight:["Jura-Light", "sans-serif"],
        jmedium:["Jura-Medium", "sans-serif"],
        jregular:["Jura-Regular", "sans-serif"],
        jsemibold:["Jura-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

