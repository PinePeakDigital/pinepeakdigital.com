/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0a1628",
        navy: {
          900: "#0c1830",
          800: "#0e1b30",
          700: "#111d35",
          600: "#162544",
          500: "#1a2d4d",
          400: "#1e3050",
          300: "#2a3f5f",
        },
        frost: {
          DEFAULT: "#8ea4c4",
          light: "#b4c5dc",
          dark: "#5a7399",
        },
        sage: {
          DEFAULT: "#6b9e74",
          light: "#83b68b",
          dark: "#4f7a56",
        },
      },
      fontFamily: {
        sans: [
          "Outfit Variable",
          "Outfit",
          ...defaultTheme.fontFamily.sans,
        ],
        display: [
          "DM Serif Display",
          "Georgia",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
