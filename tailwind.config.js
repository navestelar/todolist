const { blackA, mauve, violet } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'blue-600': '#1E6F9F',
      'blue-400': '#4EA8DE',
      'purple-500': '#5E60CE',
      'purple-300': '#8284FA',
      'gray-700': '#0D0D0D',
      'gray-600': '#1A1A1A',
      'gray-500': '#262626',
      'gray-400': '#333333',
      'gray-300': '#808080',
      'gray-200': '#D9D9D9',
      'gray-100': '#F2F2F2',
      'red-400': '#E25858',
    },
  },
  plugins: [],
}