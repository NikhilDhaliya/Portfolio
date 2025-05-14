/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
      },
      animation: {
        floatBall: "floatBall 8s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 7s infinite",
        morph: "morph 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-delay-2": "float 6s ease-in-out 4s infinite",
      },
      keyframes: {
        floatBall: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
