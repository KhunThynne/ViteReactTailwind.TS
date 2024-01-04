/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'primary': "#1098e7",
      'secondary': '#b1b1b1',
      'danger':"#e73e38",
      'success':"#4bda46",
      'white': "#ffffff",
      'black':"#000000ff"
    },
    extend: {},
  },
  plugins: [],
}

