import type { Config } from "tailwindcss";
import tokens from "./tokens.json";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        background: tokens.colors.neutral["50"],
        foreground: tokens.colors.text.DEFAULT,
        muted: tokens.colors.neutral["200"],
        text: {
          DEFAULT: tokens.colors.text.DEFAULT,
          light: tokens.colors.text.light,
          dark: tokens.colors.text.dark,
          inverse: tokens.colors.text.inverse,
        },
        neutral: tokens.colors.neutral,
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
