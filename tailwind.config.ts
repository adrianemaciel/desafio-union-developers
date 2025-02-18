/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1f1d2b",
        primary: "#ffffff",
        secondary: "#e2e2e2",
        gradient: {
          from: "#0048fe",
          to: "#851d86",
        },
      },
    },
  },
  plugins: [],
};
