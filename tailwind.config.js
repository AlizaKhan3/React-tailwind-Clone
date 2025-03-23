/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ff0000",
        "secondary-color" : "#13ca92",
        "p-color" : "#6e6e6e"
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "custom-screen" : "280px",
        "nav-custom-screen" : "950px"
      }
    },
  },
  plugins: [],
}