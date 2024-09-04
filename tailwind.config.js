/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "Segoe UI", "Arial", "Segoe", "DejaVu Sans", "Trebuchet MS", "Verdana", "sans-serif"],
        'brockmann': ["Brockmann", "Segoe UI", "Arial", "Segoe", "DejaVu Sans", "Trebuchet MS", "Verdana", "sans-serif"],
      },
      boxShadow: {
        'base': '0 1px 6px rgba(0,0,0,.04)'
      },
      colors: {
        'primary': {
          20: '#f8fcfb',
          40: '#e9f6f2',
          60: '#daf1ea',
          80: '#ccebe2',
          100: '#bde5d9',
          150: '#aee0d1',
          200: '#9fdac9',
          250: '#91d4c0',
          300: '#82cfb8',
          350: '#73c9af',
          400: '#65c3a7',
          450: '#56be9f',
          500: '#47b896',
          550: '#41a98a',
          600: '#3c9a7e',
          650: '#368c72',
          700: '#307d66',
          750: '#2b6e5a',
          800: '#25604e',
          850: '#1f5142',
          900: '#1a4236',
        }
      }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1320px',
      },
      padding: '1.5rem',
 
    }
  },
  plugins: [],
}

