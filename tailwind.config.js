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
        "45vw": "45vw",
        "80pt": "80%",
        "30pt": "30%",
        "31pt": "31%"
      },
      borderRadius: {
        "4500px": "4500px"
      },
      backgroundColor: {
        "custom-1": "#f3ffd6",
        "custom-2": "#bafcff"
      },
      backgroundImage: {
        "scale-1": "url('src/assets/sell_3.jpg')"
      },
      brightness: {
        "30": ".3"
      }
    },
  },
  plugins: [],
}