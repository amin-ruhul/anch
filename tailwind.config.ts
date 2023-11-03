import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },

      colors: {
        primary: {
          DEFAULT: "#377DFF",
        },
        secondary: {
          500: "#EBEDF0",
          900: "#D2D4D6",
          default: "#EBEDF0",
        },
        gray: {
          400: "#EDEFF1",
          500: "#F0F5FA",
          600: "#F3F3F3",
          700: "#B0B7C3",
          800: "#8A94A6",
        },

        "error-color": "#FF5630",
      },
    },
  },
  plugins: [],
};
export default config;
