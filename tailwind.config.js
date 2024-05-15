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
        hoverHeaderTextBg: "rgba(7,1,55,.9)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".btn-custom": {
          "background-color": "#000000", // bg-black
          "color": "#f4c221", // text-yellow-500
          "width": "100%", // w-full
          "border-radius": "9999px", // rounded-full
          "padding-top": "0.625rem", // py-2.5
          "padding-bottom": "0.625rem", // py-2.5
          "padding-left": "1rem", // px-4
          "padding-right": "1rem", // px-4
          "box-shadow": "0 0 0 4px #f4c221;", // ring-4 ring-yellow-500
          "outline": "none", // focus:outline-none
          "cursor": "pointer", // cursor-pointer
          "font-weight":700,
        },
        ".btn-custom:hover": {
         " opacity": "0.7", // hover:opacity-70
        },
        ".btn-custom:focus": {
          "box-shadow": "0 0 0 2px #F59E0B", // focus:ring-2 focus:ring-yellow-500
        },
      };
      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
