const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      cornflowerBlue: {
        DEFAULT: "#634bfa",
      },
      sunsetOrange: {
        DEFAULT: "#FF4954",
      },
      tuna: {
        DEFAULT: "#2A2733",
      },
      sunglow: {
        DEFAULT: " #ffe02d",
      },
    },
  },
  plugins: [],
};
