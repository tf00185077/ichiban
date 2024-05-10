/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "767px",
      },
      fontFamily: {
        header:
          "Microsoft YaHei,Arial,Helvetica,sans-serif,STHeiti Light,LiHei Pro",
      },
      colors: {
        headerTextBg: "rgba(35,5,140,.8)",
        hoverHeaderTextBg:"rgba(7,1,55,.9)"
      },
    },
  },
  plugins: [],
};
