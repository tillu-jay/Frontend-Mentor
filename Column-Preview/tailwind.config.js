/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: "Big Shoulders Display",
        lexedaDeca: "Lexend Deca",
      },
      colors: {
        brightOrange: "#e38826",
        darkCyan: "#006970",
        veryDarkCyan: "#004241",
        lightGray: "#f2f2f2",
      },
      height: {
        100: "27rem"
      }
    },
  },
  plugins: [],
};
