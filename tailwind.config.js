/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "56vh": "56vh",
        "75vh": "75vh",
      },
      width: {
        "35vw": "35vw",
        "40vw": "40vw",
        "45vw": "45vw"
      },
      borderRadius: {
        "4500px": "4500px"
      },
      backgroundColor: {
        "custom-1": "#f3ffd6"
      }
    },
  },
  plugins: [],
}