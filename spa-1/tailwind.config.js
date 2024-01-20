/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#9DBC98",
        secondary: "#EBD9B4",
        dark: "#638889",
        light: "#F9EFDB",
      },
    },
  },
  plugins: [],
};
