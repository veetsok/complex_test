import colorsTW from "./src/styles/lib/tailwindStyles/tailwind.colors";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/user.InterfaceLayer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "2sm": "425px",
      },
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "24px",
        h4: "16px",
        h5: "12px",
        h6: "10px",
      },
      boxShadow: {
        "3xl": " 0 13px 19px 0 rgba(0, 0, 0, 0.07);",
      },
      fontFamily: {
        geometria: ["Geometria", "sans-serif"],
      },
      backgroundImage: {
        "new-arrivals": "url(/img/new-arrivals.png)",
      },
      colors: colorsTW,
    },
  },
  plugins: [],
};

export default config;
