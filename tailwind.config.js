/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/img/louck8.jpg')",
        "hero-two": "url('./assets/img/louck16.png')",
      },
    },
  },
  plugins: [],
};
