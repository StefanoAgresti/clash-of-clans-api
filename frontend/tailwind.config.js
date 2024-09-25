/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: "#E8E8E0",
          100: "#343427",
          200: "#68684d",
          300: "#9a9a76",
          400: "#c1c1ab",
          500: "#e8e8e0",
          600: "#ecece5",
          700: "#f1f1ec",
          800: "#f5f5f2",
          900: "#fafaf9",
        },
        wenge: {
          DEFAULT: "#5E5451",
          100: "#131110",
          200: "#252120",
          300: "#383230",
          400: "#4a4341",
          500: "#5e5451",
          600: "#817470",
          700: "#a19693",
          800: "#c0b9b7",
          900: "#e0dcdb",
        },
        glaucous: {
          DEFAULT: "#6B7899",
          100: "#15181f",
          200: "#2b303d",
          300: "#40485c",
          400: "#55607b",
          500: "#6b7899",
          600: "#8993ad",
          700: "#a7aec2",
          800: "#c4c9d6",
          900: "#e2e4eb",
        },
        violet: {
          DEFAULT: "#4E4D79",
          100: "#101018",
          200: "#1f1f31",
          300: "#2f2f49",
          400: "#3f3e61",
          500: "#4e4d79",
          600: "#68679e",
          700: "#8e8db6",
          800: "#b4b3ce",
          900: "#d9d9e7",
        },
        ultra_violet: {
          DEFAULT: "#5E548A",
          100: "#13111c",
          200: "#262238",
          300: "#393353",
          400: "#4c446f",
          500: "#5e548a",
          600: "#7b71a8",
          700: "#9c95be",
          800: "#bdb8d4",
          900: "#dedce9",
        },
        ash_gray: {
          DEFAULT: "#BAB8A8",
          100: "#27261f",
          200: "#4f4d3e",
          300: "#76735d",
          400: "#9a977f",
          500: "#bab8a8",
          600: "#c7c6b8",
          700: "#d5d4ca",
          800: "#e3e2dc",
          900: "#f1f1ed",
        },
        battleship_gray: {
          DEFAULT: "#847C73",
          100: "#1a1917",
          200: "#34312e",
          300: "#4f4a44",
          400: "#69625b",
          500: "#847c73",
          600: "#9c958d",
          700: "#b5b0aa",
          800: "#cecac6",
          900: "#e6e5e3",
        },
        rojo: {
          DEFAULT: "#D9141A",
          100: "#2b0405",
          200: "#56080b",
          300: "#810c10",
          400: "#ac1015",
          500: "#d9141a",
          600: "#ec353c",
          700: "#f1686c",
          800: "#f69a9d",
          900: "#facdce",
        },
        kelly_green: {
          DEFAULT: "#6DB630",
          100: "#16240a",
          200: "#2b4913",
          300: "#416d1d",
          400: "#569127",
          500: "#6db630",
          600: "#88d04e",
          700: "#a6dc7a",
          800: "#c4e7a6",
          900: "#e1f3d3",
        },
        dim_gray: {
          DEFAULT: "#797165",
          100: "#181714",
          200: "#312e29",
          300: "#49453d",
          400: "#625b52",
          500: "#797165",
          600: "#978f82",
          700: "#b1aba2",
          800: "#cbc7c1",
          900: "#e5e3e0",
        },
      },
      fontFamily: {
        supercell: ["supercell", "sans-serif"],
      },
    },
  },
  plugins: [],
};
