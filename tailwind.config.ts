import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: {
        600: "#7C34FB",
        800: "#5F18D2",
      },
      orange: {
        200: "#ffd06e",
      },
      pink: {
        400: "#fe6687",
      },
      white: "#000",
      black: "#fff",
    },
  },
  plugins: [],
};
export default config;
