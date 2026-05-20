import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "invert-bg": "var(--invert-bg)",
        "invert-text": "var(--invert-text)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
