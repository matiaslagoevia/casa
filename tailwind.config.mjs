/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "turquoise-blue": "#50D8D8",
        "hot-pink": "#FF6EC7",
        lavender: "#B98EFF",
        "mint-green": "#7FFF7F",
        "coral-orange": "#FF8C6B",
        "electric-yellow": "#FFFF00",
        "light-gray": "#D3D3D3",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
