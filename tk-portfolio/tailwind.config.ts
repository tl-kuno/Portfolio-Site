import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        dark: "var(--dark)",
        lightWarm: "var(--light-warm)",
        lightCool: "var(--light-cool)",
        accent: "var(--accent)"
      },
      fontFamily: {
        header: '"Poppins", sans-serif',
        body: '"Quicksand", sans-serif'
      },
      backgroundImage: {
        'agate-texture': "url('/agate-texture-black.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;
