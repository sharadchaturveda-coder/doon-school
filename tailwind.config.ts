import type { Config } from "tailwindcss";
import tokens from "./design/tokens.json";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: tokens.colors.primary,
          foreground: tokens.colors.foreground,
        },
        secondary: {
          DEFAULT: tokens.colors.secondary,
          foreground: tokens.colors.foreground,
        },
        background: tokens.colors.background,
        foreground: tokens.colors.foreground,
        muted: {
          DEFAULT: tokens.colors.muted,
          foreground: tokens.colors.foreground,
        },
        text: tokens.colors.text,
        // Your brand colors
        'brand-primary': tokens.colors.primary,
        'brand-secondary': tokens.colors.secondary,
        // shadcn/ui aliases
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: tokens.colors.primary,
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      fontFamily: {
        body: [tokens.typography.fontFamily.body[0], "sans-serif"],
        heading: [tokens.typography.fontFamily.heading[0], "serif"],
      },
      fontSize: tokens.typography.fontSize,
      lineHeight: tokens.typography.lineHeight,
      spacing: tokens.spacing,
      borderRadius: {
        DEFAULT: tokens.borderRadius.DEFAULT,
        ...tokens.borderRadius,
      },
    },
  },
  plugins: [],
};
export default config;
