const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        coolDark: {
          400: "#40444B",
          500: "#36393f",
          600: "#32353b",
        },
        primary: {
          50: "#fbeff3",
          100: "#d96d91",
          200: "#d55d85",
          300: "#d14d79",
          400: "#cd3c6d",
          500: "#c33364",
          600: "#b22e5a",
          700: "#a22a52",
          800: "#92264a",
          900: "#822142",
        },
      },
      boxShadow: {
        button: "var(--shadow-button)",
        card: "var(--shadow-card)",
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: ".5",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
