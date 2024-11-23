import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#E6F4F1', // pastel aqua
        400: '#6A89CC', // pastel light blue
        500: '#7BBCE0', // pastel medium blue
        600: '#4A91BA', // pastel dark blue
        700: '#333333', // negro (oscuro)
    800: '#B0B0B0', // gris oscuro pastel
      },
      grayscale: {
        25: '#F9FAFB',  // off-white
        50: '#F0F8FF',  // light pastel blue
        100: '#E3EDF3', // very light blue-gray
        200: '#D4E5EC', // soft blue-gray
        950: '#B1C9D4', // muted pastel blue
      },
    },
    
  },
  plugins: [tailwindcss, autoprefixer],
};
