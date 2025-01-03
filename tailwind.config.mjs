/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#b47000',
        primaryGray:'#555555'
      },
      fontFamily: {
        noto: ["'Noto Serif',' serif'"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
