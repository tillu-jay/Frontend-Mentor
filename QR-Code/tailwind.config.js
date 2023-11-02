/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
      },
      colors: {
        qrBlueGrey: "#7b879d",
        qrLightGrey: "#d6e2f0",
        qrDarkBlue: "#1f3251",
      },
      height: {
        100: "30rem",
      },
    },
  },
  plugins: [],
};
