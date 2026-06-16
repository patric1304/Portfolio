import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030712",
          900: "#0a0d14",
        },
      },
      boxShadow: {
        glass: "0 20px 80px -40px rgba(16, 185, 129, 0.15)",
        "glow-sm": "0 0 20px rgba(16, 185, 129, 0.15)",
        "glow-md": "0 0 40px rgba(16, 185, 129, 0.2)",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
