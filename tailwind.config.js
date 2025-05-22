/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {animation: {
      ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', bounce : "bounce 2s infinite"
    },},
  },
  plugins: [require('daisyui'),require('flowbite/plugin')],
  daisyui: {
    themes: ["light", "dark"],
  },
}

