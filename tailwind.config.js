/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#009CFF",
      black: "#191414",
      lightBlack: "#121212",
      bgColor: "#0f172a",
      white: "white",
      lightWhite: "#DCDCDC",
    },
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        cutive: ["cutive-mono-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
