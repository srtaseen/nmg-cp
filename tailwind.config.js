/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Bebas Neue", "sans-serif"],
        kaushan: ["Kaushan Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
