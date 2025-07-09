import { CssSyntaxError } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      brown: "#A0522D",
      brownLight: "#D2B48C",
      RaisinBlack: "#1E1E1E",
      EggShell: "#F0EAD6",
      ShadowBlue: "#B0C4DE",
      MutedRose: "#AE6667",
      CustumBlue: "#6F8E99",
      Gumbo: "#6B4F4F",
      brownDark: "#8B4513",
      black: "#000000",
      white: "#FFFFFF",
      cyan: "#00FFFF",
      cyanLight: "#E0FFFF",
      cyanDark: "#008B8B",
      orange: "#FFA500",
      orangeLight: "#FFDAB9",
      orangeDark: "#FF8C00",
      grey: "#808080",
      greyLight: "#D3D3D3",
      greyDark: "#696969",
    },
    extend: {},
    fontFamily: {
      body: ["joselin sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
