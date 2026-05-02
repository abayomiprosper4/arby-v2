import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": "hsl(var(--color-brown))",
        "white": "hsl(var(--color-white))",
        "orange": "hsl(var(--color-orange))",
        "gray": {
          100: "hsl(var(--color-gray-100))",
          300: "hsl(var(--color-gray-300))",
          500: "hsl(var(--color-gray-500))",
          700: "hsl(var(--color-gray-700))",
        },
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        text: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          glow: "var(--accent-glow)",
        },
        themeBorder: {
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)",
        }
      },
      screens: {
        "xs": "480px"
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        sans: ["var(--font-sf-pro-display)", ...defaultTheme.fontFamily.sans],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at 30% 20%, rgba(255, 106, 42, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 106, 42, 0.05) 0%, transparent 50%)',
      },
      cursor: {
        "custom": "url(/assets/icons/custom-cursor.svg), pointer"
      },
      boxShadow: {
        'neon': '0 0 5px #FF5F1F, 0 0 20px rgba(255, 95, 31, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
