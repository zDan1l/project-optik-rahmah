/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*' ],
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
        myorange: '#FEB306',
        myblue2: '#86EDF7'
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}
