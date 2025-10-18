/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // covers both JS and TS
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cmyk: {
          // Base
          "base-100": "#ffffff", // background
          "base-200": "#f9fafb", // slightly darker background
          "base-300": "#d1d5db", // border / subtle backgrounds
          "base-content": "#1f2937", // text (gray-800)

          // Primary
          "primary": "#4e63ff",
          "primary-content": "#ffffff",

          // Secondary
          "secondary": "#ff4e7b",
          "secondary-content": "#ffffff",

          // Accent
          "accent": "#c4ff4e",
          "accent-content": "#1f2937",

          // Neutral
          "neutral": "#333333",
          "neutral-content": "#f3f4f6",

          // State colors
          "info": "#4eaaff",
          "info-content": "#ffffff",
          "success": "#6ee7b7",
          "success-content": "#1f2937",
          "warning": "#fbbf24",
          "warning-content": "#1f2937",
          "error": "#f87171",
          "error-content": "#1f2937",
        },
      },
    ],
  },
}
