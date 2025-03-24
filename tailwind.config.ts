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
        brand: {
          primary: '#0A73B9',
          secondary: '#F68E1E',
          accent: '#0AB96D',
          dark: '#1C1B1F',
          light: '#F8F8F8',
        },
        text: {
          primary: '#171717',
          secondary: '#6B7280',
          light: '#FFFFFF',
        },
        primary: "#2D8CF0", // Keeping original primary color
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} satisfies Config;