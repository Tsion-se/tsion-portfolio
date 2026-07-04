/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1120",
        },
        card: "rgba(255,255,255,0.05)",
        borderc: "rgba(255,255,255,0.08)",
        accent: {
          primary: "#3B82F6",
          secondary: "#06B6D4",
          highlight: "#8B5CF6",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["64px", { lineHeight: "1.05", fontWeight: "700" }],
        "hero-sm": ["40px", { lineHeight: "1.1", fontWeight: "700" }],
        section: ["42px", { lineHeight: "1.15", fontWeight: "700" }],
        "section-sm": ["30px", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["18px", { lineHeight: "1.7" }],
      },
      boxShadow: {
        premium: "0 20px 50px rgba(0,0,0,.45)",
        glow: "0 0 40px rgba(59,130,246,0.35)",
        "glow-lg": "0 0 80px rgba(59,130,246,0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
