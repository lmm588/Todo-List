/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'}, // => @media (max-width: 767px) { ... }
      'sm': {'max': '643px'}, // => @media (max-width: 643px) { ... }
    }
  },
  plugins: [],
}

