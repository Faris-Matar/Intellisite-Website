/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          50: "#f4f5f7",
          100: "#dde1e7",
          200: "#b9c0cd",
          300: "#8994a7",
          400: "#5a6782",
          500: "#384462",
          600: "#1f2a44",
          700: "#152036",
          800: "#0D1B2A",
          900: "#060d17",
          950: "#02060d",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50: "#faf6ea",
          100: "#f4eccb",
          200: "#ead793",
          300: "#dcbe5c",
          400: "#C9A84C",
          500: "#b08e38",
          600: "#8d6f2d",
          700: "#6b5322",
          800: "#483818",
          900: "#29200d",
        },
        bone: "#E8E4DA",
        ink: "#0D1B2A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial scale
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      spacing: {
        "scene-y": "clamp(6rem, 12vh, 10rem)",
      },
      transitionTimingFunction: {
        // Luxury cubic beziers — no bounce, controlled in/out
        "io-silk": "cubic-bezier(0.22, 1, 0.36, 1)",
        "io-editorial": "cubic-bezier(0.65, 0, 0.35, 1)",
        "io-authority": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      transitionDuration: {
        fast: "220ms",
        base: "520ms",
        slow: "900ms",
      },
    },
  },
  plugins: [],
};
