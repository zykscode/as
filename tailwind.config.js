/* eslint-disable global-require */
const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "var(--bg-color)",
        accent: "var(--bg-color-1)",
        decend: "var(--bg-color-2)",
        secondary: "var(--bg-color-3)",
        primaryFg: "var(--fg-color)",
        accentFg: "var(--fg-color-1)",
        decendFg: "var(--fg-color-2)",
        secondaryFg: "var(--fg-color-3)",
        red_background: "var(--red_background)",
        pink_background: "var(--pink_background)",
        blue_background: "var(--blue_background)",
        purple_background: "var(--purple_background)",
        teal_background: "var(--teal_background)",
        yellow_background: "var(--yellow_background)",
        orange_background: "var(--orange_background)",
        brown_background: "var(--brow_background)",
        gray_background: "var(--gray_background)",
        red_background_co: "var(--red_background_co)",
        pink_background_co: "var(--pink_background_co)",
        blue_background_co: "var(--blue_background_co)",
        purple_background_co: "var(--purple_background_co)",
        teal_background_co: "var(--teal_background_co)",
        yellow_background_co: "var(--yellow_background_co)",
        orange_background_co: "var(--orange_background_co)",
        brown_background_co: "var(--brow_background_co)",
        gray_background_co: "var(--gray_background_co)",
        item_blue: "var(--item-blue)",
        item_orange: "var(--item-orange)",
        item_green: "var(--item-green)",
        item_pink: "var(--item-pink)",
        item_brown: "var(--item-brown)",
        item_red: "var(--item-red)",
        item_yellow: "var(--item-yellow)",
        item_default: "var(--item-default)",
        item_purple: "var(--item-purple)",
        item_gray: "var(--item-gray)",
        colours: {
          ashley: "var(--ashley)",
          red: "var(--red)",
          pink: "var(--pink)",
          blue: "var(--blue)",
          purple: "var(--purple)",
          teal: "var(--teal)",
          yellow: "var(--yellow)",
          orange: "var(--orange)",
          brown: "var(--brown)",
          gray: "var(--gray)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
