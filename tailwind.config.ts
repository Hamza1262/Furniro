import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px',  // custom breakpoint for extra small devices
        '3xl': '1600px', // custom breakpoint for even larger screens
      },
      colors: {
        peach: '#FFF3E3',
        goldbrown: '#B88E2F',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font here
      },
    },
  },
  plugins: [],
} satisfies Config;
