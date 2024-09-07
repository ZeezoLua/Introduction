/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["light", "dark", "valentine"],
  },

  plugins: [
    require('daisyui'),
  ],
}