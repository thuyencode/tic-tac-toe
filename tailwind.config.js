const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Martian Mono', ...defaultTheme.fontFamily.mono]
      },
      minHeight: {
        screen: '100dvh'
      }
    }
  },
  plugins: [require('preline/plugin'), require('tailwindcss-animate')]
}
