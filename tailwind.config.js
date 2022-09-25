/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "darkRed-100":"#F3603C",
        "darkBlue-100":"#242D52",
        "dark-100":"#1D1E25",
        "light-100":"#FFF0EC",
        "darkRed-200":"#F98F75",
        "bodyBg":"#F2F2F2",
        "white-100":"#FFFFFF"
      },
      spacing:{
        "copyright-margin":"-80px"
      },
      aspectRatio:{
        "1x1":"1"
      },
      translate:{
        "center-img":"50"
      }
    },
    
    fontFamily:{
      main:[
        "Be Vietnam Pro"
      ]
    },
    maxWidth:{
      "500":"500px",
      "400":"400px"
    },
  },
  plugins: [],
}
