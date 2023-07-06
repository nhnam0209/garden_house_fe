/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#31708E",
        secondary: "#5085A5",
        thirdary: "#8FC1E3",
        white_greenhouse: "#F7F9FB",
        green: "#687864",
      },
    },
  },
  plugins: [],
};
