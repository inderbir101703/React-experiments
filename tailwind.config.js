/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ], // telling tailwind css  which a list of the files where i can use tailwind css--> ./src/**/*. anywhere in src folder we can use it
  theme: {
    extend: {},
  },
  plugins: [],
}

