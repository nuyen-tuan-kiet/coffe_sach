const { Hidden } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto",...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(0)  ', opacity:100 },
          '50%': { transform: 'translateX(-50px)',opacity:80  },
          '100%': { transform: 'translateY(-20px) ' ,opacity:0},
         
        }
      },
      animation: {
        roll: 'roll 3s ease-in '
      }
    },
  },
  plugins: [],
}