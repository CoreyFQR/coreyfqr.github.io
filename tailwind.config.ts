import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f6f2",
        ink: "#22211f",
        muted: "#6f6a61",
        line: "#ded9ce",
        moss: "#4f6f52",
        clay: "#a06045",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(34, 33, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
