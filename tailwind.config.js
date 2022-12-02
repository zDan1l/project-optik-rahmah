/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html' ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px'
      },
      colors: {
        dark: '#0f172a',
        primary: '#0f562a'
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}
