const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", ...fontFamily.sans],
        mono: ["var(--font-dm-mono)", ...fontFamily.mono],
      },
      fontSize: {
        display: ["3rem", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-sm": ["3.5rem", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-md": ["4rem", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-lg": ["5rem", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        fadeSlideUp: "fadeSlideUp 0.5s ease forwards",
        cursorBlink: "cursorBlink 1s step-end infinite",
        gradientShift: "gradientShift 4s ease infinite",
      },
    },
  },
  plugins: [],
};
