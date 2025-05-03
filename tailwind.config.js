/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'daphne-blue': 'var(--daphne-blue)',
        'daphne-blue-dark': 'var(--daphne-blue-dark)',
        'sonic-blue': 'var(--sonic-blue)',
        'gray-blue': 'var(--gray-blue)',
        'shadowfax-white': 'var(--shadowfax-white)',
        'misty-gray': 'var(--misty-gray)',
        'raven-black': 'var(--raven-black)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
