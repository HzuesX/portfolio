/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        signature: ['Great Vibes', 'cursive'],
      },
      colors: {
        neutral: {
          900: '#0a0a0a',
          800: '#171717',
        }
      },
      backgroundImage: {
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.0) 100%)',
      }
    },
  },
  plugins: [],
}
