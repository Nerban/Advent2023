/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },

    ".card-flip-transform":{
      transform: "rotateY(180deg)",
      "transition-duration": "1s"
    },

    ".card-flip-battle":{
      transform: "rotateY(180deg) rotateZ(90deg)",
      "transition-duration": "1s"
    },
    ".card-unflip":{
      "transform": "rotateY(0deg) rotateZ(0deg)",
      "transition-duration": "1s"
    }
   ,
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.amber,
      blue: colors.blue,
      slate: colors.stone,
    },
    extend: {},
  },
  plugins: [Myclass],
  purge: [ 'dist/**/*.html' ],
}

