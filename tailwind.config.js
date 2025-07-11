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
          mdplus: "1100px",
          ssm: "680px",
        },
        keyframes: {
          blink: {
            '0%, 49%': { opacity: '1' },
            '50%, 100%': { opacity: '0' },
          },
          gentleBounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-4px)' },
          },
        },
        animation: {
          blink: 'blink 1s step-start infinite',
          gentleBounce: 'gentleBounce 1.6s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }