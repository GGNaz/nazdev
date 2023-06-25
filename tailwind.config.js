/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      // customBlack: "#292929",
      // customGray: "#4D4D4D",
      // customLightgray: "#898989",
      customBlack: "#181818",
      customGray: "#4D4D4D",
      customLightgray: "#898989",
      dirtyWhite: "#F3F2F3",
    },
  },
};
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
export const plugins = [require("tailwind-scrollbar")({ nocompatible: true })];
