/** @type {import('tailwindcss').Config} */
const { Urbanist } = require('next/font/google');
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'urbanist': ['Urbanist', 'sans-serif'], 
    },
    
    colors:{
      ...colors,
      primary:"#004593",
      secondary:"#F89BC0",
      background : colors.white,
      subtitle : "#d1cfcf",
    },
  },
  plugins: [],
};
