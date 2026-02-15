import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-display)", "var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
          dark: "#0284c7",
        },
        surface: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          lighter: "#334155",
        },
      },
    },
  },
  plugins: [],
};
export default config;
