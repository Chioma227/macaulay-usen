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
        borderBlack:"rgba(35, 35, 35, 0.896)",
        ashBlack:"rgba(15, 15, 15, 0.804)",
        burgundry:"#12F7D6",
        lightGreen:"#98FAEC",
      },
      backgroundColor:{
        bg:"rgb(26, 26, 26)",
        ash:"rgb(56, 55, 55)",
        black10:"#000000",
        darkGreen:"#1A1E23",
        lightGreen:"#98FAEC",
        greenishAsh:"#292F36"
      },
      backgroundImage:{
        'custom-bg': "url('/assets/imgs/about_bg.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
