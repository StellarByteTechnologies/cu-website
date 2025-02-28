import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      maxWidth: {
        '1519': '1519px',
        '1327': '1327px'

      },
      colors: {
        primary: "#2D8CF0", // Main brand color
        secondary: "#F9A826", // Accent color
        background: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
