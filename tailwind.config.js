/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      color: {
        gray: {
          100: '#70757a',
        },
      },
    },
  },
  plugins: [],
};
