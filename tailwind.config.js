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
        seconday: '#64748b',
        mypurple: '#956FFF',
        myblue: '#00BDCE',
        myorange: '#FEB306'
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}
