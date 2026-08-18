import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#111826",
        surface2: "#161F2E",
        border: "#1F2A3A",
        text: "#E7ECF3",
        muted: "#8B98AC",
        accent: "#6C5CE7",
        accent2: "#22D3EE",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(108,92,231,0.25), 0 8px 30px rgba(108,92,231,0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
