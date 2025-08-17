// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)',
        playfair: 'var(--font-playfair)',
      },
    },
  },
  plugins: [],
};

export default config;
