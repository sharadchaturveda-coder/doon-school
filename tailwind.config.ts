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
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        background: tokens.colors.background,
        foreground: tokens.colors.foreground,
        muted: tokens.colors.muted,
      },
      fontFamily: {
        sans: [tokens.typography.fontFamilySans],
        heading: [tokens.typography.fontFamilyHeading],
        body: [tokens.typography.fontFamilySans],
      },
      borderRadius: {
        DEFAULT: tokens.radius
      }
    },
  },
  plugins: [],
};

export default config;
