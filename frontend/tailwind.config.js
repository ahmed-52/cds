const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        '360/412.5': '360 / 412.5',
      },
      colors: {
        das: '#2562F5',
        cas: '#252526',
        hov: '#113CA3',
        three: '#333333',
        cool: '#212121',
      },
      fontFamily: {
        Domine: ['Domine', 'serif'],
        b1: ['Shipporib1', 'sans-serif'],
        ant: ['Shipporiant', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
        generalSans: ['GeneralSans', 'sans-serif'],
        cond: ['GoldmanSansCd', 'sans-serif'],
        gs: ['GoldmanSans', 'sans-serif'],
        gserif: ['GoldmanSerif', 'serif'],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      screens: {
        lmd: '900px',
        lxl: '1200px',
        xlx: '1600px',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
