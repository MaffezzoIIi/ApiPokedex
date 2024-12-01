/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bug: "#92ba3a",
        dark: "#585760",
        dragon: "#166cc5",
        electric: "#f0d85a",
        fairy: "#ed92e4",
        fighting: "#d14461",
        fire: "#f8a455",
        flying: "#a1bce9",
        ghost: "#606fb9",
        grass: "#62bc5d",
        ground: "#d87c52",
        ice: "#78cfc0",
        normal: "#a0a19f",
        poison: "#b666cd",
        psychic: "#f88684",
        rock: "#c9ba8d",
        steel: "#5994a1",
        water: "#579ddc",
        hp: "#FF5959",
        att: "#F08030",
        def: "#FAE078",
        spa: "#9DB7F5",
        spd: "#A7DB8D",
        spe: "#FA92B2",
      },
    },
  },
  plugins: [],
};
