/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dmSans)",
      secondary: "var(--font-barlow)",
    },
    extend: {
      colors: {
        background: "#f5f1e8",
        "background-dark": "#ebe3d6",
        foreground: "#2b2b2b",

        primary: "#355e3b",
        "primary-light": "#4f7a55",

        secondary: "#6b4f3a",
        "secondary-light": "#8a6a4e",

        accent: "#a3b18a",

        card: "#fffaf3",

        border: "#d8cbb8",
      },

      boxShadow: {
        custom: "0px 4px 54px 10px rgba(53, 94, 59, 0.08)",
      },

      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
