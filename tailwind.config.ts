/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1f1d2b",
        primary: "#121119",
        "gradient-from": "#851d86",
        "gradient-to": "#0048fe",
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#e2e2e2",
      },
      animation: {
        "bounce-slow": "bounce-slow 2s infinite ease-in-out",
        wiggle: "wiggle 1s infinite ease-in-out",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
