/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#2A2642",
        "main-purple-dark": "#231D3A",
        "main-purple-light": "#453F62",
        "main-text-smoke": "#8F8FA7",
        "main-text-smoke-dark": "#8F8FA7B0",
      },
      boxShadow: {
        "main-input": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
