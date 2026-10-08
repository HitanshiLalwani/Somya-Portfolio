/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { kanit: ['Kanit', 'sans-serif'] },
      colors: { ink: '#0C0C0C', cloud: '#D7E2EA' }
    }
  },
  plugins: []
}
