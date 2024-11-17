import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200], // แก้จาก DEFAUIT เป็น DEFAULT
          hover: colors.neutral[300],
          border: colors.neutral[400], // แก้จาก boder เป็น border
          text: colors.neutral[500],
          dark: colors.neutral[800],
          "dark-hover": colors.neutral[900],
        },
      },
    },
  },
  plugins: [],
}
