/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }

      xl: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      main: "#17BBDE",
    },
  },
  plugins: [],
};
