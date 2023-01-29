/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    screens:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1400px',

    },
    container:{
        center:true,
        padding: '1rem',
    },
    extend: {
      colors:{

         light:{

            primary:'rgb(241 ,245 ,249)',
            secondary:"#f1f1f1",
            tertiary:"rgb(39 39 42)",
            cta:"rgb(217 119 6)",
            danger:"#7A0213",
            success:"#76C893",
            warning:"#DBB42C",
            info:"#00193A"

         },

         dark:{
            
            primary:"#131313",
            secondary:"rgb(30, 41 ,59)",
            tertiary:"rgb(156 163 175)",
            cta:"rgb(194 65 12)",
            danger:"#CD0C2B",
            success:"#DDFCAD",
            warning:"#FFE169",
            info:"#034780"

         }

      },
        fontFamily:{

            "quicksand":["Quicksand",...defaultTheme.fontFamily.sans],
            "popins":["Roboto",...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}