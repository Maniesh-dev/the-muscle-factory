import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },
    backgroundImage: {
      hero: 'url(/assets/hero/bg.png)',
      membership: "url(/assets/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333',
          100: '484848',
          200: '#151515',
          300: '#111',
        },
        accent: '#d4000d',
        main: '#ff2e2e'
      },
      
    },
  },
  plugins: [],
} satisfies Config;
