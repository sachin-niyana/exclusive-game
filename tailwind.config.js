/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xsm: "14px",
      sm: "16px",
      xmd: "20px",
      md: "24px",
      "2md": "32px",
      lg: "34px",
      "2lg": "48px",
      xl: "60px",
      xxl: "72px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Anton: ["Anton", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/webp/hero-bg.webp')",
        "jackpot-bg": "url('/assets/webp/jackpot-bg.webp')",
        "propia-bg": "url('/assets/webp/lanza-bg.webp')",
        "luxury-bg": "url('/assets/webp/luxury-bg.webp')",
        "plataforma-bg": "url('/assets/webp/platatorma-bg.webp')",
        "green-shadow":
          "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      },
      colors: {
        "American-Silver": "#D1CFD2",
        "Rich-Black": "#00141B",
        gray: "#CCD0D1",
        "White-gray": "#CCCFD1",
        "dark-gray": "#334349",
        "light-gray": "#828F92",
        "Pastel-Green": "#7AF57A",
        "black-Green": "#051D20",
        Green: "#357D6D",
      },
      boxShadow: {
        grayShadow: "0px 0px 10px 2px gray",
      },
    },
  },
  plugins: [],
};
