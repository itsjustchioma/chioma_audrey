/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./pages/**/*.html", "./portfolio/**/*.html",],
    theme: {
      extend: {
        fontFamily: {
          handwritten: ['Reenie Beanie', 'cursive'],
          typewriter: ['Special Elite', 'monospace'],
        },
        colors: {
          black: '#000000',
          red: {
            700: '#B91C1C',
            800: '#991B1B'
          }
        },
        screens: {
          xlplus: "1250px", // Your custom screen size
        },
      },
    },
    plugins: [],
  }