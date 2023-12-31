/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    'index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.bg-hero-pattern': {
          backgroundImage: "linear-gradient(to right, rgb(0 0 0 /.6) 80%, rgb(0 0 0 /.6) 100%), url('img/header.jpg')",
        },
        '.bg-hero-about': {
          backgroundImage: "linear-gradient(to right, rgb(0 0 0 /.6) 80%, rgb(0 0 0 /.6) 100%), url('img/acerca de.jpg')",
        },
      })
    }),
  ],
}

