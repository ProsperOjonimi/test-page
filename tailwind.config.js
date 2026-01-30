/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter Tight"', "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
