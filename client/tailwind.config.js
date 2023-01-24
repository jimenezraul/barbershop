/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
     // add font kanit font-family: 'Kanit', sans-serif;
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
};
