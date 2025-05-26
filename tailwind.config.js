/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./pages/**/*.html", "./portfolio/**/*.html",],
    theme: {
      extend: {
        fontFamily: {
          handwritten: ['Reenie Beanie', 'cursive'],
          typewriter: ['Special Elite', 'monospace'],
          label: ['Bebas Neue', 'sans-serif'],
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
        keyframes: {
          blink: {
            '0%, 49%': { opacity: '1' },
            '50%, 100%': { opacity: '0' },
          },
        },
        animation: {
          blink: 'blink 1s step-start infinite',
        },
      },
    },
    plugins: [],
  }