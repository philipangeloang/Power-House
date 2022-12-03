/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('../public/images/home-bg.jpg')",
        "mobile-bg": "url('../public/images/mobile-bg.jpg')",
        parallax1: "url('../public/images/Interior-Design-Parallax.jpg')",
      },
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
