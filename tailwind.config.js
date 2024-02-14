/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter', sans-serif",
        anton: "'Anton', sans-serif",
      },
      colors: {
        lightGreen: "#7AF57A",
        darkBlack: "#00141B",
        extraLightGreen: "#7AF57A14",
        borderGreen: "#347C70",
        gray: "#FEFEFE",
      },
      backgroundImage: {
        "hero-console": "url('/assets/hero/gaming-console-bg.webp')",
        "lanza-layer": "url('/assets/lanza-tu-propia/lanza-bg.webp')",
        "lanza-leer-mas":
          "url('/assets/lanza-leer-mas/lanza-leer-mas-bg.webp')",
        "luxury-gaming-console": "url('/assets/luxury/luxury-bg.webp')",
        "jackpot-table": "url('/assets/common/jackpot-table-bg.webp')",
        "next-step-arrow-upward-curve":
          "url('/assets/nuestros-steps/arrow-upward-curve.svg')",
        "green-button-line":
          "url('/assets/common/button-green-haft-border.svg')",
        greenLinearGradient:
          "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
        greenTransparentGradient:
          "linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)",
        blackShadow:
          "radial-gradient(48.51% 51.68% at 50.39% 55.02%, #00000060 0%, #00000050 23%, #00000040 47%, #00000030 72%, #00000020 0%, #00000003 0%)",
      },
    },
  },
  plugins: [],
};
