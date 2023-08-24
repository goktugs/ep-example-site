/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#2A2642",
        "main-purple-dark": "#231D3A",
        "main-text-smoke": "#8F8FA7",
      },
    },
  },
  plugins: [],
};
