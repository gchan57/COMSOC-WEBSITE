// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Content paths are generally handled by @tailwindcss/vite in this setup
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your primary IEEE Blue color
        'ieee-blue': '#00629B',
        'ieee-teal': '#007b7b', 
      },
    },
  },
  plugins: [],
}