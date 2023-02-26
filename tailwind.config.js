/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: { primary: "poppins", secondary: "sans-serif" },

    extend: {
      colors: {
        primary: "#FFA500",
        grayBackground: "#f1f4f8",

        cardShow: "#f7f8f9",
        textColor: "#252b36",
        navTextColor: "#6f6f6f",
      },
    },
  },
  plugins: [],
};
