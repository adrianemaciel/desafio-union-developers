/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1f1d2b",
        primary: "#121119",
        gradient: {
          from: "#851d86",
          to: "#0048fe",
        },
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#e2e2e2",
      },
    },
    plugins: [],
  },
};
