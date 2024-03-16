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
        darkGrey:"#ffff",
        lightGrey:"#DDDDDD",
        hover:"#999999", 
        ashBlack:"rgba(15, 15, 15, 0.804)"
      }
    },
  },
  plugins: [],
};
export default config;
