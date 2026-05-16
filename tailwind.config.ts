import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: "#FAFAF8",
        ink: "#111111",
        navy: {
          DEFAULT: "#1B2E5E",
          50: "#F2F4F9",
          100: "#D6DCE9",
          500: "#1B2E5E",
          600: "#172850",
          700: "#121F40",
        },
        amber: {
          DEFAULT: "#E8A838",
          50: "#FDF6E7",
          100: "#FAE7B8",
          500: "#E8A838",
          600: "#CC8E1F",
        },
        body: "#1A1A1A",
        muted: "#6B7280",
        border: "#E5E3DF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        prose: "65ch",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.7",
          },
          "70%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "soft-pulse": "soft-pulse 2.6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(17, 17, 17, 0.18)",
        "card-lg": "0 24px 60px -18px rgba(17, 17, 17, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
