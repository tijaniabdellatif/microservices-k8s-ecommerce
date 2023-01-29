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
    extend: {
        fontFamily:{

            "quicksand":["Quicksand",...defaultTheme.fontFamily.sans],
            "popins":["Roboto",...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}