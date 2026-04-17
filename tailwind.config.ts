import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        studio: {
          50: '#f0f4ff',
          100: '#dde6ff',
          400: '#7b93f9',
          500: '#4f6ef7',
          600: '#3d5ce8',
          900: '#1a2260',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
