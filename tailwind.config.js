/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('./images/home-bg.jpg')",
        "mobile-bg": "url('./images/mobile-bg.jpg')",
        parallax1: "url('./Interior-Design-Parallax.jpg')",
      },
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
