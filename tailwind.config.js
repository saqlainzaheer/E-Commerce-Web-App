/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./js/**/*.{js,ts,jsx,tsx,html}",
    "./css/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
