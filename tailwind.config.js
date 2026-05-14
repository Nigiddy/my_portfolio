const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#111827',
            a: { color: '#2563eb', '&:hover': { color: '#1d4ed8' } },
            'h1,h2,h3,h4': { color: '#111827', fontWeight: '600' },
            code: { color: '#2563eb', backgroundColor: '#eff6ff', padding: '2px 6px', borderRadius: '4px' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' },
            blockquote: { borderLeftColor: '#2563eb', color: '#6b7280' },
          }
        }
      },
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
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
      },
      animation: {
        cursorBlink:   "cursorBlink 1s step-end infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
