import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blabk10:"#000000",
        darkGrey:"#CCCCCC",
        lightGrey:"#DDDDDD",
        hover:"#999999", 
        ashBlack:"rgba(21, 20, 20, 0.746)"
      }
    },
  },
  plugins: [],
};
export default config;
