/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "5px",
      },
      backgroundImage: {
        "footer-texture": "url(/src/images/ion_paw-sharp@2x.png)",
        "checked-input": `url(/src/images/cheked.svg),
            linear-gradient(rgb(23, 187, 222), rgb(23, 187, 222))`,
        "select-arrow": "url(/src/images/select_arrow.svg)",
      },
      backgroundPosition: {
        "lg-footer-position": "right 30px center, center;",
        "select-position": "right 10px center",
      },
      backgroundSize: {
        "footer-size": "200px",
      },
      backgroundColor: {
        "footer-img-color": "",
      },
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "744px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }

      xl: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      main: "#17BBDE",
      mainLight: "#D7F0F5",
      hover: "#55D6F1",
      white: "#fff",
      black: "#000",
      gray: "#D9D9D9",
      darkGray: "#D3D3D3",
      lightBlack: "#828282",
    },
  },

  plugins: [],
};
