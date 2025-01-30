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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'big-stone': {
          '50': '#f5f7fa',
          '100': '#e9eff5',
          '200': '#cfdce8',
          '300': '#a5bfd4',
          '400': '#749ebc',
          '500': '#5382a4',
          '600': '#406789',
          '700': '#35546f',
          '800': '#2f485d',
          '900': '#2b3e4f',
          '950': '#22303f',
        },
        'shark': {
          '50': '#f5f6f6',
          '100': '#e5e7e8',
          '200': '#cdd1d4',
          '300': '#aab1b6',
          '400': '#808b90',
          '500': '#657075',
          '600': '#565e64',
          '700': '#4a5054',
          '800': '#414549',
          '900': '#3a3d3f',
          '950': '#1f2123',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
