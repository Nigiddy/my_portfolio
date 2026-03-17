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
        "fluid-heading-1": "clamp(2.5rem, 1rem + 5vw, 5rem)",
        "fluid-heading-2": "clamp(2rem, 1rem + 4vw, 4rem)",
        "fluid-heading-3": "clamp(1.5rem, 1rem + 3vw, 3rem)",
        "fluid-body": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        display: ["clamp(3rem, 1rem + 5vw, 5rem)", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-sm": ["clamp(3.5rem, 1rem + 6vw, 6rem)", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-md": ["clamp(4rem, 1rem + 7vw, 7rem)", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
        "display-lg": ["clamp(5rem, 1rem + 8vw, 8rem)", { lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.05em" }],
      },
      keyframes: {
        fadeSlideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%":       { "background-position": "100% 50%" },
        },
        cardReveal: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlideUp:   "fadeSlideUp 0.5s ease forwards",
        cursorBlink:   "cursorBlink 1s step-end infinite",
        gradientShift: "gradientShift 4s ease infinite",
        cardReveal:    "cardReveal 0.5s ease both",
      },
    },
  },
  plugins: [],
};
