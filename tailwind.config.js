/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: 'hsl(14, 45%, 36%)', // brown
          'dark-raspberry': 'hsl(332, 51%, 32%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'rose-white': 'hsl(330, 100%, 98%)',
          eggshell: 'hsl(30, 54%, 90%)',
          'light-grey': 'hsl(30, 18%, 87%)',
          'wenge-brown': 'hsl(30, 10%, 34%)', // like gray
          'dark-charcoal': 'hsl(24, 5%, 18%)',
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Young Serif", "serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 600,
        semibold: 700,
      },
      fontSize: {
        fsize: '16px',
        smSize: '12.5px'
      },
    },
  },
  plugins: [],
}

