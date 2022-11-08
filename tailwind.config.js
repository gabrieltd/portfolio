/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        mouse: {
          '0%': { top: 10, opacity: 0 },
          '10%': { top: 10, opacity: 0 },
          '50%': { opacity: 1 },
          '90%': { top: 30, opacity: 0 },
          '100%': { top: 30, opacity: 0 }
        }
      },

      animation: {
        'mouse-movement': 'mouse 2.2s ease-in-out infinite backwards'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}