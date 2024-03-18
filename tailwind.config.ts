import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: "#999999",
        darkGrey: "#ffff",
        blabk10: "#000000",
        lightGrey: "#DDDDDD",
        burgundry: "#12F7D6",
        lightGreen: "#98FAEC",
        ashBlack: "rgba(15, 15, 15, 0.804)",
        borderBlack: "rgba(35, 35, 35, 0.896)",
      },
      backgroundColor: {
        black10: "#000000",
        darkGreen: "#1A1E23",
        bg: "rgb(26, 26, 26)",
        lightGreen: "#98FAEC",
        ash: "rgb(56, 55, 55)",
        greenishAsh: "#292F36",
      },
      backgroundImage: {
        "custom-bg": "url('/assets/imgs/about_bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
