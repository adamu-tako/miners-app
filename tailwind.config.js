/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      colors: {
        primary: "#168DE2",
        black: "#181817",
        darkBlue: "#607087",
        mainGray: "#88A1B3",
        secondaryGrey: "#F4F6F9",
      },
      animation: {
        slide: "slideIn 0.5s ease-in ",
      },
    },
  },
  plugins: [],
};
