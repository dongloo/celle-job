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
        'primary': {
          100: '#f0f5ff',
          120: '#ebf2ff',
          140: '#e6efff',
          160: '#e1ecff',
          180: '#dce9ff',
          200: '#d6e4ff',
          300: '#adc6ff',
          400: '#85a5ff',
          500: '#597ef7',
          600: '#2f54eb',
          700: '#1d39c4',
          800: '#10239e',
          900: '#061178',
          1000: '#030852',
        },
        'sky': {
          1000: '#003440',
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

