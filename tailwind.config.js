/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#04151F",
        "secondary": "#183A37",
        "accent": "#C44900",
        "neutral": "#EFD6AC",
      }
    },
  },
  plugins: [],
}

