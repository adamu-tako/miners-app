/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#168DE2",
        black: "#181817",
        darkBlue: "#607087",
      },
    },
  },
  plugins: [],
};
