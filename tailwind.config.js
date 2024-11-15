/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        dark: {
          bg: '#1a1a1a',
          card: '#2a2a2a',
          text: '#e5e5e5',
        },
      },
    },
  },
  plugins: [],
};