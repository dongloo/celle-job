/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "Segoe UI", "Arial", "Segoe", "DejaVu Sans", "Trebuchet MS", "Verdana", "sans-serif"],
        'brockmann': ["Brockmann", "Segoe UI", "Arial", "Segoe", "DejaVu Sans", "Trebuchet MS", "Verdana", "sans-serif"],
      },
      colors: {
        'blue': {
          950: '#151458',
          1000: '#111047',
        },
        'purple': {
          750: '#7822A7',
        }
      }
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1280px',
        '2xl': '1280px',
      },
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2rem',
      },
 
    }
  },
  plugins: [],
}

