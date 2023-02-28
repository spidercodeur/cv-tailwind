/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#5f1a99',
        'secondary': '#2c2c2c',
        'dark_primary': '#ffe4c4'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
