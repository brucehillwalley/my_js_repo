/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors:{
      mycolor:{
        100:"#FF8C00",
      200:"#FF8d70"}
    }
  },
  },
  plugins: [],
}

