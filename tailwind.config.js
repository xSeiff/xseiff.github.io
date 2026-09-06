/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blurple: {
          DEFAULT: '#5865F2',
          light: '#7983f5',
          dark: '#4752c4',
        },
      },
    },
  },
  plugins: [],
}
