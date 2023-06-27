/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      customBlack: "#181818",
      customGray: "#4D4D4D",
      customLightgray: "#898989",
      dirtyWhite: "#F3F2F3",
      customWhite: "#F5F5F5",
    },
  },
};
export const darkMode = "class";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
export const plugins = [require("tailwind-scrollbar")({ nocompatible: true })];
