/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 20%)",
        "dark-gray": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
