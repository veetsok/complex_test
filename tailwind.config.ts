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
        "3sm": "320px",
      },
      container: {
        center: true,
        screens: {
          xl: "1000px",
        },
      },
      fontSize: {
        h1: "96px",
        h2: "36px",
        h3: "24px",
        h4: "16px",
        h5: "12px",
        h6: "10px",
      },
      fontFamily: {
        geometria: ["Geometria", "sans-serif"],
      },
      colors: colorsTW,
    },
  },
  plugins: [],
};

export default config;
