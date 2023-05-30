/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "textcolor":"rgb(61 67 88 / 97%)",
        "primarycolor":"rgb(99, 91, 255)",
        "notification1":"rgb( 227,232,238 )",
        "bgcolor":"rgb( 247,250,252 )"
      },
      fontFamily:{
        "poppins":"poppins"
      }
    },
  },
  plugins: [],
}

