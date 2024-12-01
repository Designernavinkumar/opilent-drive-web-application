/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
        '1': '#3CABA4',
        '2': '##FFFFFF',
        },
        black: {
        '1':'#1A1A1A',
        '2':'#333333',
        },
        Gray :{
        '1':'#F7F7F7',
        '2':'#E6E6E6',
        '3':'#CCCCCC',
        '4':'#B3B3B3',
        '5':'#666666',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

